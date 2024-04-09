function saludar( nombre ){
    console.log("Hola " + nombre);
    return 2;
} // Funcion declarativa


// const saludar2 = function(){
//     console.log("Hola mundo");
// } // Funcion anonima

const saludarFlecha = ( nombre ) => {
    console.log("Hola " + nombre);
} // Funcion flecha 

let saludarFlecha2 = ( nombre ) => console.log("Hola " + nombre); // Funcion flecha,  las funciones flecha tienen una característica especial: si el cuerpo de la función solo tiene una expresión, puedes omitir las llaves {} y la palabra clave return. El valor de la expresión se devolverá automáticamente.



let retornoSaludar = saludar('Drixner') // estos equivale al retorno de la funcion que facilmente se puede almacenar en una variable

console.log({retornoSaludar});


let getAleatorio = () => Math.random();
console.log(getAleatorio());



function getAleatorio1(){
    return Math.random();
}

console.log(getAleatorio1());

//otras forma de hacer una funcion flecha sin usar llaves con el metodo random

let getAleatorio2 = () => Math.random();
console.log(getAleatorio2());




saludarFlecha('Rafael');

saludarFlecha2('Drixner');