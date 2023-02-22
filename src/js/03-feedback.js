import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateFormInputs();

feedbackForm.addEventListener('input', throttle(feedbackFormInputHandler, 500));
feedbackForm.addEventListener('submit', feedbackFormSubmitHandler);

function feedbackFormInputHandler(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function feedbackFormSubmitHandler(e) {
  if (feedbackForm.email.value === '' || feedbackForm.message.value === '') {
    alert('Заповніть форму');
    return;
  }
  console.log(formData);
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateFormInputs() {
  feedbackForm.email.value = formData.email || '';
  feedbackForm.message.value = formData.message || '';
}
