import { Fragment, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, deleteTodo, clearTodos } from "./features/todoSlice"

export default function Todos() {
    const items = useSelector(state => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        <ul>
            {
                items.map((item, i) => {
                    return <Fragment key={i}>
                        <li>{item}</li>
                        <button onClick={() => dispatch(deleteTodo(i))}>Delete</button>
                    </Fragment>
                })
            }
        </ul>
        <button onClick={() => dispatch(clearTodos())}>Clear Todos</button>
    </div>
}