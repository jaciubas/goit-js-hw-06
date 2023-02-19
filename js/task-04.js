const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");

let counterValue = 0;

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
