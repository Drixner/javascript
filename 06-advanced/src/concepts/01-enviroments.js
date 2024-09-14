/**
 *
 * @param {HTMLDivElement} element
 */

export const environmentsComponent = (element) => {
  const env = import.meta.env;
  console.log(env);
  const html = `
            Dev: ${env.DEV} <br/>
            Prod: ${env.PROD} <br/>
            Key: ${env.VITE_API_KEY} <br/>
            URL: ${env.VITE_BASE_URL} <br/>
    `;
  element.innerHTML = html;
};
