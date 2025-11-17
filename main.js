window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-top");
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
document.querySelectorAll('.offcanvas-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvasEl = document.getElementById('offcanvasRight');
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);

        if (offcanvas) {
            offcanvas.hide();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiperreviews', {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    0: {slidesPerView: 1},
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }
});
});
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiperprice', {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    0: {slidesPerView: 1},
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 4 }
  }
});
});

document.getElementById("year").textContent= new Date().getFullYear();