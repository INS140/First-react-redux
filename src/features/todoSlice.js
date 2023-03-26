import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const todoSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        deleteTodo: (state, action) => {
            const rest = state.items.filter((item, i) => {
                return i!==action.payload
            })
            return { items: [...rest]}
        },
        clearTodos: state => {
            return { items: [] }
        }
    }
})

export const { addTodo, deleteTodo, clearTodos } = todoSlice.actions

export default todoSlice.reducer