class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class Inventario {
  constructor() {
    this.productos = [];
  }
  agregaProducto(nombre, precio, cantidad) {
    this.productos.push(new Producto(nombre, precio, cantidad));
  }

  encontrarProducto(nombre) {
    return this.productos.find(producto => producto.nombre === nombre);
  }

  venderProducto(nombre, cantidad) {
    let producto = this.encontrarProducto(nombre);
    if (producto && producto.cantidad >= cantidad) {
      producto.cantidad -= cantidad;
      console.log(`Vendido ${cantidad} de ${nombre}. Quedan ${producto.cantidad} en stock.`);
    } else {
      console.log('Producto no disponible o stock insuficiente.');
    }
  }
}