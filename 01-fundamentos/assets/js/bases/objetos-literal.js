let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log('Nombre:', personaje.edad);
console.log('Nombre:', personaje['nombre']);

console.log('Nro de trajes:', personaje.trajes.length);

Object.freeze(personaje); // Congela el objeto, no se puede modificar, solo congela el primer nivel mas no los objetos internos

personaje.dinero = 100000000;
personaje.casado = true;

console.log(personaje);

const propiedad = Object.getOwnPropertyNames(personaje); // Obtiene las propiedades del objeto, incluyendo las que no son enumerables

const valores = Object.values(personaje); // Obtiene los valores del objeto

console.log({propiedad});
console.log({valores});