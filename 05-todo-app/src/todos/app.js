import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";
import html from "/src/todos/app.html?raw";

const ElementIDs = {
  TodoList: "todo-list",

}



/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {


  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    console.log(todos);

  }


  // Cuando la funcion App() es llamada, el elemento con el id 'app' es renderizado
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
};
