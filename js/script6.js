/*$(document).ready(function(){
	$('.item-box').on('click','a.info-link', function(event){
		event.preventDefault();
		$(this).closest('.item-box').find('.more-info').toggle(1, function(){
			//alert('se completo!')

		});
		//show hide
	});
});*/

/*$(document).ready(function(){
	$('.item-box').on('click','a.info-link', function(event){
		event.preventDefault();
		
				//$(this).closest('.item-box').find('.more-info').fadeIn(3000);
				//$(this).closest('.item-box').find('.more-info').fadeToggle(3000);
				//$(this).closest('.item-box').find('.more-info').fadeOut(3000);
			
	});
		

});*/


$(document).ready(function(){
	$('.item-box').on('click','a.info-link', function(event){
		event.preventDefault();
				// slideDown(), slideUp(), slideToggle()
				$(this).closest('.item-box').find('.more-info').slideToggle(200 , function(){
					alert('se ha completado');
				});
			
	});
		

});