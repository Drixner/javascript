// que es una singleton?
// es una clase que solo puede existir una vez, y se puede acceder a ella sin instanciarla
class Singleton {
  static instance;
  nombre = "Drixner";

  constructor(nombre = "Drixner") {
    if (!Singleton.instance) {
      this.nombre = nombre;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
const instancia1 = new Singleton("Daniel");
