$(document).ready(function(){
	$('#example').on('click', 'button.switch', function(){
		$.ajax('result.html', {

				beforeSend: function() {
					$('#carga').text ('cargando..');
				}
			 })
			.done(function(response){
			$('#result').html(response);
		})
			.fail(function( request, errortype, errormessage){
				//tmeout, error, abort, parseerror
				console.log(errortype);
				alert(errormessage);

			})


				.always(function(){
				$('#carga').text('completado..');
			});

	});
});