import html from "/src/store/app.html?raw";
/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  // Cuando la funcion App() es llamada, el elemento con el id 'app' es renderizado
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
