const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

const pedro = {
  nombre: "Pedro",
  edad: 15,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

fher.imprimir();
pedro.imprimir();

/// Solucion con clases
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  }
}

const maria = new Persona("Maria", 18);

maria.imprimir();

class Auto {
  constructor(modelo, anio, color) {
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
  }
  imprimir() {
    console.log(
      `Modelo: ${this.modelo}, anio: ${this.anio}, color: ${this.color}  `,
    );
  }
}

class Perro {
  constructor(raza, edad, color) {
    this.raza = raza;
    this.edad = edad;
    this.color = color;
  }
}

const carroToyaota = new Auto("toyota", "1893", "amarillo");
const carroYaris = new Auto("yaris", 1934, "verde");
const carroMazda = new Auto("mazda", 1934, "verde");
let miPerro = new Perro("ronwiler", 34, "Amarillo");

carroToyaota.imprimir();
carroYaris.imprimir();
carroMazda.imprimir();

console.log(miPerro.color);
