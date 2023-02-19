const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputLength = Number(input.dataset.length);
  if (input.value.length >= inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
