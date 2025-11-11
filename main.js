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
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
  loop: true, 
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    768: { slidesPerView: 1 },
    1200: { slidesPerView: 3 }
  }
});
});