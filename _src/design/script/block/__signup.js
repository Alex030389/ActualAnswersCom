(function() {
const signupForms = document.querySelectorAll('.signup__form');

if (signupForms.length) {
  signupForms.forEach((signupForm, index) => {
    signupForm.addEventListener('click', (evt) => {
      signupForms.forEach((signupForm) => {
        signupForm.classList.remove('signup__form--focus');
      });
      evt.currentTarget.classList.add('signup__form--focus');
    });
  });
};
}());

