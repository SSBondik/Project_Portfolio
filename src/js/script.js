const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close'),
    closeNavMenu = document.querySelectorAll('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeNavMenu.forEach(li => {
    li.addEventListener('click', () => {
        menu.classList.remove('active');
    });
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

//Скрипт таймер ДР

const deadline = '2022-12-02';

function getTimeRemaning(endtime) {
    let days,hours,minutes,seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
    if(t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        days = Math.floor( t/(1000*60*60*24) );
        hours = Math.floor( (t/(1000*60*60) % 24) );
        minutes = Math.floor( (t/1000/60) % 60);
        seconds = Math.floor( (t/1000) % 60);
    }

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if(num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaning(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer', deadline);