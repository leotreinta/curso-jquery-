$(document).ready(function(){
	$('#add-container').on ('click', 'button', function(){
		var value=$('#add-container input').val();
		console.log(value);

		var html= '<div class="item"><div class="remove">x</div> ' + value + '</div>'
		console.log(html);

		//$('#places-container').append(html);
		//$('#places-container').prepend(html);

		//$(html).appendTO('#places-container');
		//$('#places-container').prepend(html);
			//$('#places-container').children().last().after(html);
			$('#places-container').children().first().before(html);

			//no sirve 
			/*$('#add-container .remove').on('click', function(){
				var parent= $(this).parent().remove();
			}*/

			$('#places-container').on('click', '.remove', function(){
				var parent =$(this).parent().remove();
			});
		});

});