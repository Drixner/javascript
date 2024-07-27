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

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        
        default:
            throw new Error(
                `Filter ${filter} is not supported`
            )
        }
}

// description es un texto que describe la tarea
const addTodo = (description) => {
    if (!description) {
        throw new Error('Description is required')
    }
    state.todos.push(new Todo (description))

}

const toggleTodo = (todoId) => {
    throw new Error('Not implemented')
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,}