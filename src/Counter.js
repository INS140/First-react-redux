import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, decrementByAmount } from "./features/counterSlice"

export default function Counter() {
    const count = useSelector(state => state.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Plus 1</button>
        <button onClick={() => dispatch(decrement())}>Minus 1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Plus 5</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>Minus 5</button>
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
}