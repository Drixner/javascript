import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';
import html from '/src/todos/app.html?raw';

const ElementIDs = {
  ClearCompletedButton: '.clear-completed',
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  TodoFilters: '.filtro',
};

/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  // Esta constante sirve para renderizar el HTML
  //y tambien para mostrar los todos
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
  const todoListUl = document.querySelector(ElementIDs.TodoList);
  const clearCompletedButton = document.querySelector(
    ElementIDs.ClearCompletedButton
  );
  const filtersLIs = document.querySelector(ElementIDs.TodoFilters);

  //listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

  todoListUl.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id')); //element.getAtribute('data-id');
    displayTodos();
  });

  //Esto sirve para eliminar un todo
  todoListUl.addEventListener('click', (event) => {
    const isDestroyElement = event.target.className === 'destroy';
    const element = event.target.closest('[data-id]');
    if (!element || !isDestroyElement) return;

    todoStore.deleteTodo(element.getAttribute('data-id')); //element.getAtribute('data-id');
    displayTodos();
  });

  clearCompletedButton.addEventListener('click', () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLIs.forEach((element) => {
    element.addEventListener('click', (element) => {
      filtersLIs.forEach((el) => el.classList.remove('selected'));
      element.target.classList.add('selected');
    });
  });
  // End listeners
};
