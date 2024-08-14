import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';
import html from '/src/todos/app.html?raw';

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
};

/**
 *
 * @param {String} elementId
 */

// esto es un comentario de prueba
// Esto est otro comentario de prueba...

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    console.log(todos);
  };

  // Cuando la funcion App() es llamada, el elemento con el id 'app' es renderizado
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

  //listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;
    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });
};
