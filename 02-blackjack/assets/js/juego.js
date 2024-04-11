/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
  puntosComputadora = 0;

//Referencias del HTML

const btnPedir = document.querySelector("#btnPedir");
const divCartasJugador = document.querySelector("#jugador-cartas");
const puntosHTLM = document.querySelectorAll("small");

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
  console.log(deck);
  return deck;
};

crearDeck();

//esta funcion me permite tomar una carta y a la vex eliminarla del deck

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};

pedirCarta();

// pedirCarta();

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  // console.log({ valor });
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; // El método isNaN() en JavaScript se utiliza para determinar si un valor es NaN (Not a Number). Este método devuelve true si el valor es NaN, y false si no lo es.
};
//Eventos

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTLM[0].innerText = puntosJugador;
});
