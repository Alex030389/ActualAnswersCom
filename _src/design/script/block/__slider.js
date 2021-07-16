//////////////////////////////////////////// vendors-slider
const vendorsSlider = new Swiper('.vendors-slider__wrap-list', {
  slidesPerView: 5,
  spaceBetween: 34,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 3,
      freeMode: false,
      slidesPerView: 'auto',
      freeMode: true,
    }
  }
})

// //////////////////////////////////////////// testimonials
const testimonialSlider = new Swiper('.testimonials-slider__wrap-list', {
  slidesPerView: 1,
  spaceBetween: 18,
  slidesPerView: 3,
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
    1639: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 1,
    },
  }
})
