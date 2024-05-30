/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  // Cuando la funcion App() es llamada, el elemento con el id 'app' es renderizado
  (() => {
    const app = document.createElement("div");
    app.innerHTML = `<h1>Hola Mundo</h1>`;
    document.querySelector(elementId).append(app);
  })();
};
