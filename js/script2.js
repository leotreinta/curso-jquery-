
$(document).ready(function(){
$('#example').on('click', function() {

 console.log('hola mundo');
})

});

$(document).ready(function(){
    $('#example').on('click', function() {

     console.log(this);
     console.log($(this));

     //$(this).addClass('sele')
     $(this).toggleClass('sele')
    });

});


$(document).ready(function(){
$('#example').on('click', 'button.switch', function(){
console.log(this);


});

});

$(document).ready(function(){
$('#example').on('click', 'button', function(){
$('#place').val();
var selected = $('#example select option:selected ');
var value= selected.val();
//var price= selected.attr('data-price');
var price= selected.data('price');
console.log(value);
console.log(price);
console.log(selected.attr('data-price'));


if(price){
$('#result').html(value+' '+price);
}
});

});


$(document).ready(function(){
$('#example').on('change', '#place', function(){
var selected=$('#place option:selected');
var value=selected.val();
var price=selected.data('price');

if(price){
$('#result').html(value+)

}

})
$('#example').on('change' , function(){})
});