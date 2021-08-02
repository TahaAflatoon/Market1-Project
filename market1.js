/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    //search icon button
    $('.fa-search').click(function() {
        $('.search-input').toggle(500);
    }),
    //bars button
    $('.bars').click(function() {
        $('.mobile').slideToggle(500);
    }),
    //smooth scroll
    $('.links a, #header').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            },800);
        }
    });
})

/*JavaScript*/
//Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 51) {
        document.querySelector('.header').style.opacity = 0.9;
    } else {
        document.querySelector('.header').style.opacity = 1;
    }
});

//side navigation menu
function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Go to top button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*-----------*/