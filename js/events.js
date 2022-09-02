$(window).scroll(function() { 
    let img = document.querySelector('.img-brand');
    let scroll = $(window).scrollTop();

    if (scroll > 10) {
        $('.menu-bar').addClass('onTop');
        $('nav').addClass('navbar-light');
        $('nav').removeClass('navbar-dark');
        /* $('nav').css('height','70%') */
        img.src = 'assets/img/dg-logo-h-b-2.png';

    } else {
        $('.menu-bar').removeClass('onTop');
        $('nav').removeClass('navbar-light');
        /* $('nav').addClass('navbar-dark'); */
        $('nav').css('height','100%')

        img.src = 'assets/img/dg-logo-h-w-2.png';

    }
});

const video = document.querySelector('video');

video.addEventListener('ended', (event)=> {
    $('.banner-movie').css('display', 'none');
    $('.text-choice').css('magin-botton', '60px')
});