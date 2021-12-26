	$(document).ready(function(){
	$.ajax('destinos.json',{
	datatype:'json',
	contentype: 'aplication/jason',
	cache:false

})
	.done(function(response){
		var html;

		$.each(response, function(index, element){
			//templating libraries para javascrip. underscore.js,mustache.js,handlebar.js
			html='<div class="item-box" data-id="'+element.id+'">';
			html+= '<img src="imagenes/'+element.image+'" />';
			html+='<div class="item-title">'+element.name+ '</div>';
			html+= '<p>'+element.description+'</p>';
			html+='<div class="item-price">$'+element.price+'</div>';
			html+= '<button>Add to cart</button>';
			html+= '<div><a href="#" class="info-link">More info</a></div>';
			html+='<div class="more-info"><p>'+element.moreInfo+'</p></div>';
			html+='</div>';


			$('body').append(html)
		});
	});
	$('body').on('click', '.info-link', function(event){
			event.preventDefault();
			$(this).closest('.item-box').find('.more-info').slideToggle();

	});

	//shoping cart
	var cart=0;

	$('body').on('click','.item-box button', function(event){
		event.preventDefault();
		var id=$(this).closest('.item-box').data('id');

		$.ajax('addtem.json',{
			data: {id:id},
			type:'post',
			datatype:'json',
			contentype:'aplication/json'

		})
		.done(function(response){
			console.log(response);
			cart+= response.price;
			$('#total-cost').text('total $'+cart);

		});

	});



});