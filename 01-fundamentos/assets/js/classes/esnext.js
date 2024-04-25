class Rectangualo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }
  // methods
  calcularArea() {
    console.log(this.#area * 2);
  }
}

const rectangulo = new Rectangualo(18, 48);
// rectangulo.#area = 100;
rectangulo.calcularArea();

console.log(rectangulo);
