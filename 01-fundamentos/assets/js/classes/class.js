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
    const producto = this.encontrarProducto(nombre);
    if (producto.cantidad < cantidad) {
      return 'No hay suficiente cantidad de producto';
    }
    producto.cantidad -= cantidad;
    return producto;
  }
}