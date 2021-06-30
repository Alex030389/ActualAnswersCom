//////////////////////////////////////////// vendors-slider
const vendorsSlider = new Swiper('.vendors-slider__wrap-list', {
  slidesPerView: 'auto',
  spaceBetween: 34,
  freeMode: true,
  navigation: {
    nextEl: ".vendors-slider__btn-next",
    prevEl: ".vendors-slider__btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      freeMode: false,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }
})
