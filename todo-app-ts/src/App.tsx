import { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId, type Todo as TodoType } from "./types.d"

const mockTodos = [
  {
    id: '1',
    title: 'Concurrir a clase de PotenciAR',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: true
  },
  {
    id: '3',
    title: 'Elaborar Portfolio con mis projectos',
    completed: false
  }
]


//const App = (): JSX.Element => {  ---> aca le estamos diciendo que lo que devuelve
// es un jsx element
// aca en cambio le decimos que el componente entero es un componente funcional de React
const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App
