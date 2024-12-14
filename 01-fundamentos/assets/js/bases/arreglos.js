// let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

// let consolas = ['Switch', 'PS4', 'Xbox', '3DS'];

// console.log(videoJuegos)

// console.log({videoJuegos, consolas});
// console.log(videoJuegos[1]);

// En JavaScript, las llaves {} se utilizan para crear un objeto. Cuando haces console.log({videoJuegos}), estás creando un objeto con una propiedad llamada videoJuegos y luego lo estás imprimiendo en la consola.

// La diferencia entre console.log(videoJuegos) y console.log({videoJuegos}) es que el primero imprime el valor de la variable videoJuegos directamente, mientras que el segundo imprime un objeto que tiene una propiedad videoJuegos cuyo valor es el valor de la variable videoJuegos.

// Por ejemplo, si videoJuegos es igual a ['Mario', 'Zelda', 'Metroid'], entonces console.log(videoJuegos) imprimirá ['Mario', 'Zelda', 'Metroid'] y console.log({videoJuegos}) imprimirá { videoJuegos: ['Mario', 'Zelda', 'Metroid'] }.

// La técnica de envolver una variable en un objeto al imprimir en la consola es útil en varias situaciones:

// Depuración: Cuando estás depurando tu código y tienes muchas variables para rastrear, puede ser útil imprimir la variable como un objeto. Esto te permite ver el nombre de la variable junto con su valor en la consola, lo que puede hacer que sea más fácil de seguir.

// Objetos con múltiples propiedades: Si videoJuegos es un objeto con múltiples propiedades, console.log({videoJuegos}) te permitirá ver todas las propiedades y sus valores de una vez.

// Trabajo con APIs: Al trabajar con APIs, a menudo necesitas enviar objetos. Imprimir el objeto antes de enviarlo puede ayudarte a asegurarte de que tiene la estructura correcta.

// Desarrollo de funciones: Si estás desarrollando una función que devuelve un objeto, puedes usar console.log({objeto}) para ver exactamente qué está devolviendo tu función.

// En resumen, imprimir variables como objetos puede ser una herramienta útil para la depuración y el desarrollo.

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function () { },
    () => { },
    { a: 1 }, //esto es un objeto literal
    ['X', 'Megaman', 'Zero', 'Dr. Light'],  ['Dr. Willy', 'Woodman'],
];

console.log({ arregloCosas })

console.log({Eroes:arregloCosas[7][3]})


// console.log(arregloCosas[6][3]) // esto permite acceder a la posición 3 del arreglo que está en la posición 6 del arregloCosas
// console.log(arregloCosas[6][4][1]) // esto permite acceder a la posición 1 del arreglo que está en la posición 4 del arreglo que está en la posición 6 del arregloCosas