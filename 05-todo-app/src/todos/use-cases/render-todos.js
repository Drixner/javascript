import { Todo } from '../models/todo.model';
import { createTodoHtml } from './';

let element;

export const renderTodos = (elementId, todos = []) => {
  if (!element)
    element = document.querySelector(elementId);
  
  if (!element) throw new Error(`Element ${elementId} required not found`);

  element.innerHTML = '';

  todos.forEach((todo) => {
    element.append(createTodoHtml(todo));
  });
};
