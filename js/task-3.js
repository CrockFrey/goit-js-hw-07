const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', function() {
  const inputValue = inputEl.value.trim();

  if (inputValue) {
    outputEl.textContent = inputValue;
  } else {
    outputEl.textContent = 'Anonymous';
  }
});