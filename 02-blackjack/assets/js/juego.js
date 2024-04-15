/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

//funcion anonima autoinvocada

(() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];

  let puntosJugador = 0,
    puntosComputadora = 0;

  //Referencias del HTML

  const btnPedir = document.querySelector("#btnPedir");
  const btnDetener = document.querySelector("#btnDetener");
  const btnNuevo = document.querySelector("#btnNuevo");
  const divCartasJugador = document.querySelector("#jugador-cartas");
  const divCartasComputadora = document.querySelector("#computadora-cartas");
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
  // turno de la computadora

  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();
      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHTLM[1].innerText = puntosComputadora; // se le asigna el valor de los puntos a la computadora

      const imgCarta = document.createElement("img"); // se crea un elemento img
      imgCarta.src = `assets/cartas/${carta}.png`; //se crea la ruta de la imagen
      imgCarta.classList.add("carta"); // se le agrega una clase al elemento img
      divCartasComputadora.append(imgCarta); // se agrega la imagen al div de cartas del jugador

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador gana");
      } else {
        alert("Computadora gana");
      }
    }, 100);
  };

  //Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTLM[0].innerText = puntosJugador;

    const imgCarta = document.createElement("img"); // se crea un elemento img
    imgCarta.src = `assets/cartas/${carta}.png`; //se crea la ruta de la imagen
    imgCarta.classList.add("carta"); // se le agrega una clase al elemento img

    divCartasJugador.append(imgCarta); // se agrega la imagen al div de cartas del jugador

    if (puntosJugador > 21) {
      console.warn("Perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });

  btnNuevo.addEventListener("click", () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTLM[0].innerText = 0;
    puntosHTLM[1].innerText = 0;
    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  });
})();
