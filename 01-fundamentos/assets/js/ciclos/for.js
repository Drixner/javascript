const heroes = [
  "Batman",
  "Superman",
  "Mujer Maravilla",
  "Flash",
  "Acuaman",
  "Linterna",
];

console.warn("For tradicional");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For in"); //sirve para recorrer objetos y arreglos, la diferencia es que en arreglos recorre los indices
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("For of"); //sirve para recorrer arreglos y strings, la diferente entre for in y for of es que for of recorre los valores del arreglo y for in recorre los indices
for (let heroe of heroes) {
  console.log(heroe);
}
