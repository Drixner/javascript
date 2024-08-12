import { Todo } from '../models/todo.model';

/**
 *
 * @param {Todo} todo
 */

export const createTodoHtml = (todo) => {
  if (!todo) throw new Error('Todo is required');

  const { done, description, id } = todo; //esto se llama destructuring, permite extraer propiedades de un objeto y asignarlas a variables

  const html = `
        
        <div class="view">
          <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
          <label>${description}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  liElement.setAttribute('data-id', id);

  if (todo.done) liElement.classList.add('completed');

  return liElement;
};
