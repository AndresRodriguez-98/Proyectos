import { type TodoId, type Todo as TodoType } from "../types.d"

// type Props = TodoType ---> de esta manera reutilizamos el tipo de Todo
// pero como queremos agregarle el onRemoveTodo a la interface props hacemos lo sig:

interface Props extends TodoType {
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
}


export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({
            id,
            completed: event.target.checked
        })
    }

    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo({ id }) }}
            />
        </div>
    )
}