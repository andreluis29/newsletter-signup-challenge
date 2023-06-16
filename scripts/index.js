const formInput = document.querySelector('#email');
const mainContainer = document.querySelector('.container');
const containerEnd = document.querySelector('.hide');
const button = document.querySelector('.submitBtn');
const dismissButton = document.querySelector('.btnDismiss');

formInput.addEventListener('keyup', () => {
  if (formInput.value !== '' && formInput.value.includes("@")) {
    button.style = 'background-color: orange;';
    button.disabled = false;
  } else {
    button.style = 'background-color: hsl(234, 29%, 20%);';
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