import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '10px',
  clickToClose: true,
  opacity: 1,
});

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (!email || !message) {
    Notify.failure('All fields must be filled');
    return;
  }

  const formDataToConsole = {
    email,
    message,
  };
  console.log(formDataToConsole);
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateForm() {
  const savedDataset = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedDataset) {
    inputEl.value = savedDataset.email || '';
    textAreaEl.value = savedDataset.message || '';
    formData[inputEl.name] = savedDataset.email || '';
    formData[textAreaEl.name] = savedDataset.message || '';
  }
}
