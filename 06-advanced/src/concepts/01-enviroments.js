/**
 *
 * @param {HTMLDivElement} element
 */

// esto es un comentario

// Esto es otro comentario
export const environmentsComponent = (element) => {
  const env = import.meta.env;
  console.log(env);
  const html = `
            Dev: ${env.DEV} <br/>
            Prod: ${env.PROD} <br/>
            Key: ${env.VITE_API_KEY} <br/>
            URL: ${env.VITE_BASE_URL} <br/>
            URL: ${env.VITE}
    `;
  element.innerHTML = html;
};
