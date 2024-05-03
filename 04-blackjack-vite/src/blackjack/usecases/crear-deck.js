// Esta función crea un nuevo deck
import _ from "underscore";

/**
 *
 * @param {array} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {array} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {array}
 *
 */

const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta) throw new Error("tipos de carta es oblitario");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};

export default crearDeck;
