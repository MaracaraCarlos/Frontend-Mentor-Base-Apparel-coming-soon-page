const submit = document.querySelector('.submit');
const input = document.querySelector('.entrada');
const error = document.querySelector('.message_error');
const form = document.querySelector('form');
const warning = document.querySelector('.warning ');

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate(e) {
  e.preventDefault()

  const inputValue = input.value.trim()

  if (!isEmail(inputValue)) {
    error.style.visibility = "visible"
    warning.style.visibility = "visible"
  } else {
    error.style.visibility = "hidden"
    warning.style.visibility = "hidden"
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}