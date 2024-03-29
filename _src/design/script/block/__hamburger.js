const btnHamburger = document.querySelector('[data-js="btn-hamburger"]');
const mNav = document.querySelector('[data-js="m-nav"]');
const mNavBox = document.querySelector('[data-js="m-nav-box"]');
const body = document.querySelector('body');
const btnCloseNav = document.querySelector('[data-js="m-nav-btn-close"]');

const openMNav = () => {
  body.classList.add('fixed');
  mNav.classList.add('m-nav--active');
  mNavBox.classList.add('m-nav__box--active');
};

const closeMNav = () => {
  body.classList.remove('fixed');
  mNav.classList.remove('m-nav--active');
  mNavBox.classList.remove('m-nav__box--active');
};

if(btnHamburger) {
  btnHamburger.addEventListener('click', () => {
    openMNav();
  });

  mNav.addEventListener('click', (evt) => {
    if(evt.target === mNav) { closeMNav() };
  });

  btnCloseNav.addEventListener('click', () => {
    closeMNav();
  });

  const isVisible = (elem) => {
    return elem.offsetWidth > 0 || elem.offsetHeight > 0;
  }

  window.addEventListener('resize', () => {
    if(!isVisible(btnHamburger)) {
      closeMNav();
    }
  })
};
