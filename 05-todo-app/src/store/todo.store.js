import { Todo } from '../todos/models/todo.model';

export const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
};

// state es un objeto que tiene una propiedad todos que es un array de objetos de la clase Todo y una propiedad filter que es un string
// Esto es comentario mas sobre el estado de la aplicación, en este caso se tiene un array de objetos de la clase Todo y un string
const state = {
  todos: [
    new Todo('Pieda del alma'),
    new Todo('Pieda del espacio'),
    new Todo('Pieda del tiempo'),
    new Todo('Pieda del poder'),
    new Todo('Pieda del realidad'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log('InitStore 🥑');
};

const loadStore = () => {
  if (!localStorage.getItem('state')) return;

  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem('state')
  );
  state.todos = todos;
  state.filter = filter;
};
// saveStateToLocalStorage es una función que guarda en el localStorage el estado actual de la aplicación
const saveStateToLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(state));
};

// getTodos es una función que recibe un argumento filter que por defecto es Filters.All
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`Option ${filter} is not valid.`);
  }
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is required');
  state.todos.push(new Todo(description));

  saveStateToLocalStorage();
};

/**
 *
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });

  saveStateToLocalStorage();
};

// esto es una constate deleteTodo que recibe un argumento todoId

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};

// const setFilter es una función que recibe un argumento newFilter que por defecto es Filters.All
/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateToLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter;
};

// Exportamos las funciones que queremos que sean accesibles desde fuera
export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
