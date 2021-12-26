$(document).ready(function(){
    //keydown, keyup
       // $('#example').on('keydown','input', function(){
      //      $('#result').html('your name is: ' +  $(this).val());
        //});

         $('#example').on('keyup','input', function(){
            $('#result').html('your name is: ' +  $(this).val());
        });
});

$(document).ready(function(){
  $('#example').on('click', 'a', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log('hello');

  });
  $('#example').on('click', 'a', function(e){
    console.log('hello container');

  });


});