(function () {
  const uNavBtn = document.querySelector('[data-js="u-nav-m-btn"]');
  const uNavList = document.querySelector('[data-js="u-nav__list"]');

  if(uNavBtn) {
    const openUNavList = () => {
      uNavList.classList.add('u-nav__list--active')
    }

    const closeUNavList = () => {
      uNavList.classList.remove('u-nav__list--active')
    }

    uNavBtn.addEventListener('click', (evt) => {
      const uNavBtnSpan = evt.currentTarget.firstElementChild;
      if(!uNavBtnSpan.classList.contains('nav-link--active')) {
        uNavBtnSpan.classList.add('nav-link--active');
        openUNavList();
      } else {
        uNavBtnSpan.classList.remove('nav-link--active');
        closeUNavList();
      }
    })
  }
}())
