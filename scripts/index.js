const formInput = document.querySelector('#email');
const mainContainer = document.querySelector('.container');
const containerEnd = document.querySelector('.hide');
const button = document.querySelector('.submitBtn');
const dismissButton = document.querySelector('.btnDismiss');

formInput.addEventListener('change', () => {
  if (formInput.value !== '' && formInput.value.includes("@")) {
    button.style = 'background-color: orange;';
    button.disabled = false;
  } else {
    button.style = 'background-color: rgb(129, 121, 121);';
    button.disabled = true;
  }
});


button.addEventListener('click', (e) => {
  e.preventDefault();
  mainContainer.className = 'hide';
  containerEnd.className = 'container-end';
});

dismissButton.addEventListener('click', (e) => {
  containerEnd.className = 'hide';
  mainContainer.className = 'container';
});