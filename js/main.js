'use strict';
/* Funcion para extrare los valores que seran colocadas 
    dentro del modal
 */

var links= $('#equipo .modal-trigger');
links.click(function(e)
{
     var padre= $(this).parent().attr('class');
    console.log(padre)
    var nueva = $(padre);
    console.log(nueva);
}) 

/* Para el menu scroll */
var menu = document.getElementById('wrap_menu');
var section = document.getElementById('nosotros');
var altura = section.offsetTop - 10;
console.log(altura);

window.addEventListener('scroll', function (e) {
   if (window.pageYOffset > altura) {
        menu.classList.add('navbar-fixed');
    } else {
        menu.classList.remove('navbar-fixed');
    }
});