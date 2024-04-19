class Persona {
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
  quienSoy() {
    console.log(`soy ${this.nombre} y mi codigo es ${this.codigo}`);
  }
  miFrase() {
    console.log(
      `el causa: ${this.nombre}, dice que su frase es: "${this.frase}"`,
    );
  }
}

const alberto = new Persona("rodrigo", 435, "morire en mi ley");
const spiderman = new Persona("peter", 324, "soy el vecino pues causa");
console.log(alberto);
console.log(spiderman);

alberto.quienSoy();
alberto.miFrase();


//libros

class Libro{
  constructor(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
  info(){
    console.log(`el libro ${this.titulo} con ${this.paginas} paginas, fue escrito por ${this.autor}`);
  }
}

const libro1 = new Libro("el señor de los anillos", "tolkien", 1000);
libro1.info();