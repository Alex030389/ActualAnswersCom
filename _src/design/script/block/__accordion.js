const faqBtns = document.querySelectorAll('.faq__q');

for (let i = 0; i < faqBtns.length; i++) {
  faqBtns[i].addEventListener('click', (evt) => {
    if(!evt.currentTarget.classList.contains('faq__q--active')) {
      evt.currentTarget.classList.add('faq__q--active');
      evt.currentTarget.nextElementSibling.classList.add('faq__a--active');
    } else {
      evt.currentTarget.classList.remove('faq__q--active');
      evt.currentTarget.nextElementSibling.classList.remove('faq__a--active');
    }
  })
};
