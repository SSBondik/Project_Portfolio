const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

close.addEventListener('click', () => {
    menu.classList.remove('active')
});

const percent = document.querySelectorAll('.skills__progress-percent'),
    lines = document.querySelectorAll('.skills__progress-scale span');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){

    //Скрипт для карусели
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prew"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});