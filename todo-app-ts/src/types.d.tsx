// lo nombramos types.d porque son las declaraciones de los tipos

export interface Todo {
    id: string
    title: string 
    completed: boolean
}

export type TodoId = Pick<Todo, 'id'>

export type ListOfTodos = Todo[]