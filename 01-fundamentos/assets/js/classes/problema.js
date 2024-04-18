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

const carroToyaota = new Auto("toyota", "1893", "amarillo");
const carroYaris = new Auto("yaris", 1934, "verde");
const carroMazda = new Auto("mazda", 1934, "verde");

carroToyaota.imprimir();
carroYaris.imprimir();
carroMazda.imprimir();
