(function() {

const signumTabs = document.querySelectorAll('.signum__tab');
const signupForms = document.querySelectorAll('.signup__form');

if(signumTabs) {
  signumTabs.forEach((signumTab, index) => {
    signumTab.addEventListener('click', (evt) => {
      signumTabs.forEach((signumTab) => {
        signumTab.classList.remove('signum__tab--active');
      });
      evt.currentTarget.classList.add('signum__tab--active');

      signupForms.forEach((signupForm) => {
        signupForm.classList.remove('signup__form--active');
      });
      signupForms[index].classList.add('signup__form--active');
    });
  });
};

}());

