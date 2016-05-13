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
var items_Menu = $('nav li a');
var alturaNav = 70; //menu.clientHeight;
var altura = section.offsetTop - (alturaNav + 1);

window.addEventListener('scroll', function (e) {
   if (window.pageYOffset > altura) {
        menu.classList.add('navbar-fixed');
    } else {
        menu.classList.remove('navbar-fixed');
    }
    
    /* On scroll actives items menu */
    var scrollPos = $(document).scrollTop() + alturaNav;
   items_Menu.each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.top-menu li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });    
});


/* Smooth scrolling para anclas*/
 $('a.smooth').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - (alturaNav - 1)}
        , 500);
});

/* Active items-menu  */
items_Menu.click( function (e) {
    items_Menu.removeClass('active');
    $(this).addClass('active');   
})

   
/* Funcion para mostrar menu en dispositivos pequeñños */
$(".button-collapse").sideNav();

/* Funcion para el scroll atraves de la pagina al hacer clic en el item del menu de navegacion */
$('.scrollspy').scrollSpy();

/* Modal */
 $('.modal-trigger').leanModal();

