//////////////////////////////////////////// vendors-slider
const vendorsSlider = new Swiper('.vendors-slider__wrap-list', {
  slidesPerView: 'auto',
  spaceBetween: 34,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
      freeMode: false,
    },
    1200: {
      slidesPerView: 5,
      freeMode: false,
    },
  }
})

// //////////////////////////////////////////// testimonials
const testimonialSlider = new Swiper('.testimonials-slider__wrap-list', {
  slidesPerView: 1,
  spaceBetween: 18,
  // freeMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    1640: {
      slidesPerView: 3,
    },
  }
})
