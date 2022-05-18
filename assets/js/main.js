/*=============== VARIABLES ===============*/
const body = document.querySelector('.body')
const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.menu-button');
const header = document.getElementById('header');
const contentBtn = document.querySelector('.content-bottom__btn');
const searchBar = document.querySelector('.header__search');
const searchBtn = document.querySelectorAll('.search-btn');

/*=============== SHOW MENU ===============*/
let menuState = true; 

menuBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (menuState) {
            menu.classList.add('show-menu');
            body.classList.add('scroll-disable');
            contentBtn.style.display = 'block';
        } else {
            menu.classList.remove('show-menu');
            body.classList.remove('scroll-disable');
            contentBtn.style.display = 'none';
        }
        menuState = !menuState;
    })
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SEARCH BAR ===============*/
let searchState = true; 

searchBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (searchState) searchBar.style.top = '0px';
        else searchBar.style.top = '-100%';
        searchState = !searchState;
    })
})

/*=============== SLICK SLIDER ===============*/
$(document).ready(function(){
    $('.category__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
        ]
    });

    $('.carousel__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            }
        ]
    });
});
