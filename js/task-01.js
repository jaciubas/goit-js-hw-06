const categories = document.querySelectorAll("#categories li h2");
///////////////////////////////////////
//////////////////////////////////////
console.log("Number of categories:" + " " + categories.length);
///////////////////////////////////////
//////////////////////////////////////
const listLenght = document.querySelectorAll(".item");
listLenght.forEach((list) => {
  console.log("Category:" + " " + list.firstElementChild.textContent);
  console.log("Elements:" + " " + list.lastElementChild.children.length);
});
