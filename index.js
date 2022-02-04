// loader 

var preload = document.getElementById("container");
var bodyb = document.getElementById("back_body");
function myfunction() {
    preload.style.top = "-100%";
    bodyb.style.overflow = "visible";

}



// navbar 
const mainMenu = document.querySelector('.nav-left');
const closeMenu = document.querySelector('.hamburger-close');
const openMenu = document.querySelector('.hamburger-open');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}



// slider 
 var swiper = new Swiper(".myswiper2", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
 pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 


   

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        // slidesPerGroup: 4,
        freeMode: true,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });


