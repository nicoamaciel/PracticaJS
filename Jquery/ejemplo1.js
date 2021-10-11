$('h1').click(function(){
  console.log("Se ha pulsado el titular h1")
})

$('li').click(function(){
  console.log("Se ha pulsado sobre algun elemento de la lista")
})

$('p').dblclick(function(){
  console.log("Se ha pulsado dos veces sobre el parrafo")
})

$('input').eq(0).keypress(function(){ /*Evento de atrapar lo que pulsa con teclado*/
  $(this).css('color','red')
})

$('input').eq(0).keypress(function(){ /*Evento de atrapar lo que pulsa con teclado*/
  $(this).css('color','red')
  console.log(event)/*Cada vez que cambiamos una letra se muestra en la consola */
  if(event.which === 100){
    $(this).css('color','green')
  }
})

$('li').eq(0).click(function(){
  $('#id1').fadeOut(2000)/*Eliminar parrafo*/
})
