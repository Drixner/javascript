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

export default{
    initStore
}