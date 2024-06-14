import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    completed: 'completed',
    Pending: 'pending'
}

const state  = {
    todos: [
        new Todo('piedra del alma'),
        new Todo('piedra del tiempo'),
        new Todo('piedra del espacio'),
        new Todo('piedra de la mente')
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state)
    console.log('store initialized')
}

const loadStore =(store) => {
    throw new Error('Not implemented')
}

const addTodo = (description) => {
    throw new Error('Not implemented')   
}

const toggleTodo = (todoId) => {
    throw new Error('Not implemented')
}

const deleteTodo = (todoId) => {
    throw new Error('Not implemented')
}

const deleteCompleted = () => {
    throw new Error('Not implemented')
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented')
}

const getCurrentFilter = () => {
    throw new Error('Not implemented')
}

export default{
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    
}