import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};
let parsedFormData = {};

feedbackForm.addEventListener('input', throttle(feedbackFormInputHandler, 500));
feedbackForm.addEventListener('submit', feedbackFormSubmitHandler);

populateFormFields();

function feedbackFormInputHandler(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function feedbackFormSubmitHandler(e) {
  console.log(formData);
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
  parsedFormData = {};
}

function populateFormFields() {
  parsedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (parsedFormData) {
    parsedFormData.email
      ? (emailInput.value = parsedFormData.email)
      : (emailInput.value = '');
    parsedFormData.message
      ? (messageInput.value = parsedFormData.message)
      : (messageInput.value = '');
    formData.email = emailInput.value;
    formData.message = messageInput.value;
  }
}
