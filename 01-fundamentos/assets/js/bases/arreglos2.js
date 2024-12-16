let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo:', juegos.length); // la propiedad length nos indica la cantidad de elementos que tiene el arreglo

console.log('Primer elemento:', juegos[0]); // accedemos a un elemento del arreglo por su índice

console.log('Último elemento:', juegos[juegos.length - 1]); // accedemos al último elemento del arreglo

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
}) // recorremos el arreglo con el método forEach

juegos.forEach((a, b, c) => {
    console.log(a,b,c)
})
 
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos}) // el método push añade un elemento al final del arreglo y devuelve la nueva longitud del arreglo

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos}) // el método unshift añade un elemento al inicio del arreglo y devuelve la nueva longitud del arreglo

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos}) // el método pop elimina el último elemento del arreglo y lo devuelve

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos}) // el método splice elimina elementos del arreglo y devuelve los elementos eliminados

let indiceChorno = juegos.indexOf("chrono")
console.log({indiceChorno}) // el método indexOf nos devuelve el índice de un elemento en el arreglo

//TODO: esto mas referencia a Arreglos