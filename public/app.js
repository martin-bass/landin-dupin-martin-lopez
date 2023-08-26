document.addEventListener("DOMContentLoaded", function () {
  AOS.refresh();
});

//animaciones de las pantallas
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    let screen2 = document.querySelector(".image-2");
    let screen3 = document.querySelector(".image-3");
    screen2.style.marginBottom = -value / 70 + "rem";
    screen3.style.marginBottom = -value / 40 + "rem";
  });
});

//dibujo de la flecha
let options = {};
let observer = new IntersectionObserver(drawArrow, options);
let target = document.querySelector("#arrow");
observer.observe(target);

function drawArrow(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      new Vivus("arrow");
    }
  });
}
//carrusel de clientes
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  freeMode: {
    enabled: true,
    momentum: true,
  },
  autoplay: {
    delay: 4000,
  },
  mousewheel: {
    invert: false,
  },
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
