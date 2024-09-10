import todoStore, { Filters } from '../../store/todo.store';

let element;

/**
 *
 * @param {String} elementId
 */

// esto es tambien otro comentario
// esta constante renderPending es una función que recibe un elementoId, si el elemento no existe, se busca en el DOM, si no existe se lanza un error, si existe se le asigna el valor de la cantidad de tareas pendientes que se obtiene del store de tareas, que se obtiene con el método getTodos, que recibe como parámetro el filtro de tareas pendientes, que se importa del store de tareas.
export const renderPending = (elementId) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  element.innerHTML = todoStore.getTodos(Filters.Pending).length;
};
