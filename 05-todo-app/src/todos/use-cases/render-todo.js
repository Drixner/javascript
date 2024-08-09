import { Todo } from '../models/todo.model';
import { createTodoHtml } from './create-todo-html';

export const renderTodos = (elementId, todos = []) => {
  //TODO: render todos
  const element = document.querySelector(elementId);

  todos.forEach((todo) => {
    const todoElement = document.createElement('li');
    todoElement.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span>${todo.text}</span>
        <button>Eliminar</button>
        `;
    element.append(todoElement);
  });
};
