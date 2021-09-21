function promedio(numero1, numero2, numero3){
  var resultado = (numero1 + numero2 + numero3) / 3;
  return resultado;
}

var dato1 = prompt("Introduce primer numero: ");
var dato2 = prompt("Introduce segundo numero: ");
var dato3 = prompt("Introduce tercer numero: ");

var primer = parseInt(dato1);
var segundo = parseInt(dato2);
var tercero = parseInt(dato3);

var valor = promedio(primer,segundo,tercero);
var texto = "El promedio de los tres numeros es: " + valor;
alert(texto);
console.log(texto);
