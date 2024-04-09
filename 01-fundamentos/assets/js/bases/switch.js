const dia = 9; // 0: domingo, 1: lunes, 2: martes, 3: miércoles, 4: jueves, 5: viernes, 6: sábado

switch (dia) {
  case 0:
    console.log("Domingo");
    break; //"break" es importante para que no se siga ejecutando el código
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("No es un día válido");
}
