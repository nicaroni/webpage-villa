//& ==========  show menu  =============

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');





//& ==========  menu show  =============
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
//& ==========  menu hidden  =============

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//& ========= remove menu mobile =========

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
const navMenu = document.getElementById('nav-menu');
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//& ======= change background header ========

const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header');
}
window.addEventListener('scroll', bgHeader);

document.querySelectorAll('.img-box').forEach(img => img.onclick = ({target}) => 
document.querySelectorAll('.img-box').forEach(i=> i.classList.toggle('img-box-click', i=== target)));

//& ======= click on What's the price and POP UP tab ========
document.addEventListener('DOMContentLoaded', function () {
  const priceBtn  = document.querySelector('.main__button');
  
  priceBtn.addEventListener('click', function () {
    const priceContentAll = document.querySelectorAll('.price__content__all');
    priceContentAll.forEach(function (content) {
        
        content.style.display = 'block';
        content.style.display = '1';
    });
  })
});

//& ======= pop up phoneNUmber when is clicked on photo tepephone ========

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var numAll = document.getElementById('numAll')
    numAll.classList.toggle('active');
}

//& remove numAll after click on 

document.addEventListener('DOMContentLoaded', function () {
    const closeLine = document.querySelector('.close__line');

    closeLine.addEventListener('click', function () {
        var blur = document.getElementById('blur');
        var numAll = document.getElementById('numAll');

        blur.classList.remove('active');
        numAll.classList.remove('active');
    });
});


//& when is clicked on Explore Location .home__button
/*
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.querySelector('.home__button');

    homeButton.addEventListener('click', function () {


    })


})

*/

function scrollToEvents() {
    const sectionEvents = document.querySelector('.events');
    sectionEvents.scrollIntoView({behavior: 'smooth'});
}