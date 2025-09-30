const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1250: {
      spaceBetween: 32,
      slidesPerView: 2,
    },
  },
});
