import { pedirCarta, valorCarta, crearCartaHtml} from "./";

/**
 * @param {Number} PuntosMinimos 
 * @param {Array<HTMLElement>} puntosHTML para mostrar los puntos en el HTML
 * @param {HTMLElement} divCartasComputadora para mostrar las cartas en el HTML
 * @param {Array<String>} deck 
 */


export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora,deck =[]) => {

    if (!puntosMinimos) {
        throw new Error("Los puntos minimos son necesarios");
    }
    if (!puntosHTML) {  
        throw new Error("Los puntosHTML son necesarios");
    }
    let puntosComputadora = 0;
    
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHtml(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  // estos sirve para que se ejecute el setTimeout
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};