/*Seleccionamos elementos del DOM */
/* Constantes por valores de los botenes lo unico que varia es el resultado*/

const botonNumeros = document.getElementsByName('data-number'); /*Captura numeros*/
const botonOpera = document.getElementsByName('data-opera'); /*Captura operaciones */
const botonDelete = document.getElementsByName('data-delete')[0]; /* Captura c borrar*/
const botonIgual = document.getElementsByName('data-igual')[0]; /* captura igual*/
var result = document.getElementById('result'); 

var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

/* Eventos - Recorrer arreglo para obtener valor */

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selecOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay(); /*Limpia pantalla*/
});

function selecOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular(); //Metodocalcular
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        default:
            return;
    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';

}


function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear(); //Cada vez que actualizamos pagina se limpia todo Boton c invoca a clear