// Javascript Calculadora1

var dato1 = prompt("Introduce el primer numero: ");
var dato2 = prompt("Introducce el segundo numero: ");
var operacion = prompt("Introduce la operacion a realizar: ");

var numero1 = parseInt(dato1);
var numero2 = parseInt(dato2);

var resultado = null;
var texto = null;

if (operacion == "+"){
  //suma entre num 1 y num 2
resultado = numero1 + numero2;
texto = "La suma de " + numero1 + " y " + numero2 + " es igual a " + resultado;
  // el mas concatena
} else if(operacion == "-"){
resultado = numero1 - numero2;
texto = "La resta de " + numero1 + " y " + numero2 + "es igual a " + resultado;
} else if (operacion == "*"){
  resultado = numero1 * numero2;
  texto = "La multiplicacion entre " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else if (operacion == "/"){
  resultado = numero2 / numero1;
  texto = "La multiplicacion entre " + numero1 + " y " + numero2 + " es igual a " + resultado;
} else {
  texto = "Operacion no permitida";
}

alert(texto)
console.log(texto);
