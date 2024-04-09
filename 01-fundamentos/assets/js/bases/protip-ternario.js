const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2 Dólares" : "10 Dólares");

console.log(elMayor(20, 15));
console.log(tieneMembresia(true));

const amigo = false;
const amigosArr = [
  "Peter",
  "Tony",
  "Dr. Strange",
  amigo ? "Thor" : "Loki",
  (() => "Nicky Fury")(), //esto se conoce como una funcion anonomia autoinvocada
];

console.log(amigosArr);

const nota = 92.4; // A+ A B+ B C+ C D+ D F
const grado =
  nota >= 95
    ? "A+"
    : nota >= 85
      ? "A"
      : nota >= 75
        ? "B"
        : nota >= 65
          ? "C"
          : nota >= 55
            ? "D"
            : nota >= 45
              ? "E"
              : "F";

console.log({ nota, grado });
