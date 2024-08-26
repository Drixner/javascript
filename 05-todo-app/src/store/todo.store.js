import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  completed: 'completed',
  Pending: 'pending',
};

// esto es una serie de constantes.
const state = {
  todos: [
    new Todo('piedra del alma'),
    new Todo('piedra del tiempo'),
    new Todo('piedra del espacio'),
    new Todo('piedra de la mente'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log('store initialized');
};

const loadStore = () => {
  if (!localStorage.getItem('state')) return;

  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem('state')
  );

  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStorage = () => {
  // console.log(JSON.stringify(state));
  localStorage.setItem('state', JSON.stringify(state));
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`Filter ${filter} is not supported`);
  }
};

//esto tambien es otro comentario

// description es un texto que describe la tarea
const addTodo = (description) => {
  if (!description) throw new Error('Description is required');
  state.todos.push(new Todo(description));

  saveStateToLocalStorage();
};

// el const toggleTodo es una funcion que recibe un id de una tarea
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  saveStateToLocalStorage();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};

const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateToLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter;
};

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
