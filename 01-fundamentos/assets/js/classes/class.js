class Producto {
  constructor(nombre, PrecioVenta, stock) {
    this.nombre = nombre;
    this.PrecioVenta = PrecioVenta;
    this.stock = stock;
  }
  vender(cantidad) {
    if (this.stock < cantidad) {
      console.log("No hay stock suficiente");
      return;
    }
    this.stock -= cantidad;
    console.log(`Vendiste ${cantidad} ${this.nombre}`);
  }
  reabastecer(cantidad) {
    this.stock += cantidad;
    console.log(`Reabasteciste ${cantidad} ${this.nombre}`);
  }
  // methods
}

const forro = new Producto("Forro de Cuaderno", 10, 100);
forro.vender(10);
console.log(forro.stock);
forro.reabastecer(20);
console.log(forro.stock);
