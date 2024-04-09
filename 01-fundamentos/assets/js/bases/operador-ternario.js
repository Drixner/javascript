// Dia de semana abrimos a las 11, pero los fines de semana abrimos a las 9
//

const dia = 6; // 0: domingo, 1: lunes, 2: martes, 3: miércoles, 4: jueves, 5: viernes, 6: sábado

const horaActual = 11;

let horaApertura;
let mensaje; // Mensaje que se mostrará en la consola

// Si el día es 0 (domingo) o 6 (sábado), la hora de apertura es a las 12

// if (dia === 0 || dia === 6) {
//     console.log("Es fin de semana");
//     horaApertura = 9;
// } else {
//     console.log("Es día de semana");
//     horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

//en ternario se puede hacer el mensaje en la misma linea

mensaje =
  horaActual >= horaApertura
    ? "Estamos abiertos"
    : `Estamos cerrados, hoy abrimos a las ${horaApertura}`;

// if (horaActual >= horaApertura) {
//   mensaje = "Estamos abiertos";
// } else {
//   mensaje = `Estamos cerrados, hoy abrimos a las ${horaApertura}`;
// }
//
console.log({ horaApertura, mensaje });
