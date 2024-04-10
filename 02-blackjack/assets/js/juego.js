/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

//esta funcion crea un nuevo deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  // console.log(deck);
  deck = _.shuffle(deck); // Mezcla el deck, de tal manera que no se repitan las cartas
  return deck;
};

console.warn("El deck origital es :");
console.log(crearDeck());

//esta funcion me permite tomar una carta y a la vex eliminarla del deck

console.warn("el deck despues de pedir una carta es :");
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();

  console.log(deck);
  console.log(carta);
  return carta;
};

// pedirCarta();

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  // console.log({ valor });
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; // El método isNaN() en JavaScript se utiliza para determinar si un valor es NaN (Not a Number). Este método devuelve true si el valor es NaN, y false si no lo es.
};

const valor = valorCarta(pedirCarta());
console.log({ valor });
