//creacion del slider de la pagina
$(document).ready(function(){

	 $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true
  });

 //reloj 
	 setInterval(function(){
	 	var reloj = moment().format("hh:mm:ss a");
	 $(".reloj").html(reloj);


	 },1000);




	

	 //efecto con jquery para la barra de menu
	 $("li.fade").hover(function(){
		$(this).fadeOut(500);
		$(this).fadeIn(700)


	 });
	


	
	
});
