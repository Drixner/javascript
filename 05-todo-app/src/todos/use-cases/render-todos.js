import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';

let element;

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */

// const renderTodo recibe el elemento que queremos renderizar y un array de todos
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  element.innerHTML = '';

  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
