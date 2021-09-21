var dato1 = prompt("Introducce el valor maximo: ");
var maximo = parseInt(dato1);

var numero = 0;
var texto = " ";

while(numero <(maximo+1)){
    if(numero%2 == 0){
      texto = texto + numero + " ";
    }

    numero = numero + 1;
}

textoFinal = "Los numero pares entre 0 y " + maximo + " son :  \n" + texto;

alert(textoFinal);
console.log(textoFinal);
