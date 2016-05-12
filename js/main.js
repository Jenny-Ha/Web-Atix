'use strict';

/* Added a preloader function */
$(window).load(function() {
    $('body').addClass('body-visible').fadeIn('slow');
    $('.loader').fadeOut('slow');
    
    
    /* Personalizar los elementos de Tipeo */
    $(function(){
        $(".type-it").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
            loop: true,
            backDelay: 3000
        });
    });
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

/* Funcion para mostrar menu en dispositivos pequeñños */
$(".button-collapse").sideNav();

/* Funcion para el scroll atraves de la pagina al hacer clic en el item del menu de navegacion */
$('.scrollspy').scrollSpy();

/* Modal */
    $('.modal-trigger').leanModal();


/* Funcion para modales
var links= $('#equipo .modal-trigger');
links.click(function(e)
{
     var padre= $(this).parent().attr('class');
    console.log(padre)
    var nueva = $(padre);
    console.log(nueva);
}) 
 */