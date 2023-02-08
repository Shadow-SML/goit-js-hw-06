const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

const items = [];

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  items.push(li);
}

ul.append(...items);
