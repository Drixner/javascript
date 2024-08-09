import { Todo } from '../models/todo.model';
import { createTodoHtml } from './';

export const renderTodos = (elementId, todos = []) => {
  
  //TODO: referencia al elemento HTML
  const element = document.querySelector(elementId);

  todos.forEach((todo) => {
    const todoElement = document.createElement('li');
    element.append(createTodoHtml(todo));
  });
};
