//Codigo javascript para los Eventos
var parrafo = document.querySelector("#id1"); /*Selecciona parrafo y lo modifica*/
var titular3 = document.querySelector("#id2"); /*Eventos recuperados id1 y id2*/

/*Añadir eventos a estos elementos*/

parrafo.addEventListener('mouseover', function() {//EntraMouse
  parrafo.style.color = 'green';
  parrafo.style.border = 'solid 2px green';
})

parrafo.addEventListener('mouseout', function() {//SaleMouse
  parrafo.style.color = 'black';
  parrafo.style.border = 'none';
})

titular3.addEventListener('click', function() {//PulsaMouse
  titular3.textContent = 'Gracias por haber pulsado !!';
  titular3.style.color = 'red';
})
