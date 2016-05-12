'use strict';

/* Added a preloader function */
$(window).load(function() {
    $('body').addClass('body-visible').fadeIn('slow');
    $('.loader').fadeOut('slow');
    
    
    /* Personalizar los elementos de Tipeo */
    $(function(){
        $(".type-it").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 70,
            loop: true,
            backDelay: 3000
        });
    });
})  

/* Para el menu scroll */
var menu = document.getElementById('wrap_menu');
var section = document.getElementById('nosotros');
var alturaNav = menu.clientHeight;
var altura = section.offsetTop - 71;
//console.log(altura);

window.addEventListener('scroll', function (e) {
   if (window.pageYOffset > altura) {
        menu.classList.add('navbar-fixed');
    } else {
        menu.classList.remove('navbar-fixed');
    }
});

/* Smooth scrolling para anclas*/
 $('a.smooth').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 70}
        , 500);
});

/*
    $('a.smooth').live('click', function(e) {  
        e.preventDefault();
        var link = $(this);  
        var anchor  = link.attr('href');  
        $('html, body').stop().animate({  
            scrollTop: $(anchor).offset().top - ($('#nav_wrapper').height()+21)
        }, 1500, 'easeOutBack');  
    });  
    */
   
/* Funcion para mostrar menu en dispositivos pequeñños */
$(".button-collapse").sideNav();

/* Funcion para el scroll atraves de la pagina al hacer clic en el item del menu de navegacion */
$('.scrollspy').scrollSpy();

/* Modal */
    $('.modal-trigger').leanModal();

