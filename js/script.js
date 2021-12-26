$(document).ready(function(){
$('#container').html('hola');
$('.class1').text('elementos');


});

$(document).ready(function(){
$('.class1 , .class2').html('<strong>hola</strong>');

});

$(document).ready(function(){
$('#listado > li').addClass('sele');

});

$(document).ready(function(){
//var result= $('#listado .class1');
//console.log (result);

var result= $('#listado').find('.class1');
console.log(result);

});
//css selector
$(document).ready(function(){
 var result= $('#listado > div');
console.log(result);

//dom traversing
 var result= $('#listado').children('div');
console.log(result);
});

$(document).ready(function(){
var result =$('#listado').children().first().children('.class1').last().prev().prev();
console.log(result);

});

$(document).ready(function(){
var result =$('#listado').parent();
console.log(result);

result= $ ('#listado').parents( '.class2');
console.log(result);

result= $ ('#listado').closest( '.class2');
console.log(result);


});
