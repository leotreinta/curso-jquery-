$(document).ready(function(){
$('#haspets').on('change', function(){

	if($(this).is(':checked')){
		$('#pets-row').show();



	}
	else{
		$('#pets-row').hide();
		$('#pet').val('');
		$('#pet-feedback').empty();

	}

	});
	$('#haspets').trigger('change');


	$('#pet').on('change',function(){
		var pet= $(this).val();
		if(pet== 'dog'){
			$('#pet-feedback').text('dogs are great!');
		}
		else if (pet=='cat') {
			$('#pet-feedback').text('cats are fun');

		}else{
			$('#pet-feedback').empty();
		}

	});
	$('#pet').trigger('change');

	$('your-form').on('submit',function(event){
		event.preventDefault();
		console.log($('#your-form').serialize());

		$.ajax('formu.json', {
			type: 'post',
			data:$('#your-form').serialize()
		})
		.done(function(response){
			$('#result').text(response.message);
		});
	});

});