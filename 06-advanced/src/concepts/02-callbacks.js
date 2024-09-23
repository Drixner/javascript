import { heroes } from "../data/heroes"

/**
 * 
 * @param {element} element 
 */

export const callbacksComponent = (element) => {
    const id = '5d86371f2343e37870b91ef1'
    findHero(id, ({name}) => {
        element.innerHTML = name;
    });
}
// esto es un comentario
/**
 * 
 * @param {String} id 
 * @param {(hero:Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    callback(hero);
}