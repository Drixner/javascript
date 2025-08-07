let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: [1923, 1123],
    ubicacion: "Malibu, California",
  },
  ultima_pelicula: "Infinity War",
};

// let carros = {
//   marca: "toyota",
//   llantas: 4,
// };

// let personajes = {
//   nombre: "Drixner",
//   Edad: 23,
// };

// console.log("Nombre:", personaje.edad);
// console.log("Nombre:", personaje["nombre"]);

// console.log("Nro de trajes:", personaje.trajes.length);

// Object.freeze(personaje); // Congela el objeto, no se puede modificar, solo congela el primer nivel mas no los objetos internos

// personaje.dinero = 100000000;
// personaje.casado = true;
// console.log(personaje);
// const propiedad = Object.getOwnPropertyNames(personaje); // Obtiene las propiedades del objeto, incluyendo las que no son enumerables

// const valores = Object.values(personaje); // Obtiene los valores del objeto

// console.log({ propiedad });
// console.log({ valores });

let carros = {
  Marca: "BMW",
  Llantas: 4,
  Puertas: 5,
  Color: "Blanco",
  Anio: 2021,
};

let AnimalesMarinos = {
  Nombre: "Tiburon",
  Habitat: "Marino",
  Peso: 500,
  Longitud: 5,
  Color: "Gris",
};

let MotocicletasCustom = {
  Nombre: 'Yamaha',
  Anio: 1923,
  NumeroLlantas: 2,
  Color: 'Marron Claro',
}
let LlantasCarros = {
  Name: 'Carolina',
  Year: 1923,
  Color: 'Blue'
}


const x = "Color";

// console.log({ Carros: carros });
// console.log({ AnimalesMarinos });
console.log(MotocicletasCustom.Nombre)
console.log('Color de la llanta es: ', LlantasCarros.Color)
console.log({ LlantasCarros })
console.log('Latencia: ', personaje.coords.lat)
console.log('Direccion: ', personaje.direccion.zip[0])

MotocicletasCustom.AnioFabricacion = 1239

const Motos = Object.entries(MotocicletasCustom)
console.log(Motos)

const propriedades = Object.getOwnPropertyNames(MotocicletasCustom)

const valores = Object.values(MotocicletasCustom)

console.log({ propriedades, valores })
console.log(propriedades, valores)
