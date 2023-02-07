const input = document.querySelector("#validation-input");

input.addEventListener("blur", validateInput);

function validateInput() {
  const length = +input.dataset.length;
  const valueLength = input.value.length;
  if (valueLength === length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
