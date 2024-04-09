const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negacion");
console.log(true);
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse()); // truee

console.warn("And"); // true si todos los valores son verdaderos

console.log(true && true); // true
console.log(true && !false); // false
console.log(true && false); // false

console.log("=========");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log("=====and===");
regresaFalse() && regresaTrue(); // false
console.log("4 condiciones", true && true && true && false); // false

console.warn("OR"); // true si alguno de los valores es verdadero

console.log(true || false); // true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse()); // true

console.log("4 condiciones", true || true || true || false); // true    // si alguna de las condiciones es verdadera, entonces es verdadero

console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150; // el valor que se asigna es el ultimo valor verdadero
const a2 = "hola" && "mundo" && soyFalso && true; // el valor que se asigna es el primer valor falso

const a3 = soyFalso || "Ya no soy falso"; // el valor que se asigna es el ultimo valor verdadero

const a4 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true; // el valor que se asigna es el primer valor verdadero

const a5 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true; // el valor que se asigna es el primer valor verdadero

console.log({ a1, a2, a3, a4, a5 });

if (regresaFalse() && regresaTrue() && (true || false || true)) {
  console.log("Hacer algo");
}

console.warn("Precedencia de operadores");
