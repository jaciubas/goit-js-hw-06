const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const newArr = [];

ingredients.forEach((ingredient) => {
  const elemList = document.createElement("li");
  elemList.className = "item";
  elemList.textContent = ingredient;
  newArr.push(elemList);
});
list.append(...newArr);
