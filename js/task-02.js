const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const liRefs = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  liRef.classList.add("item");
  return liRef;
});

listRef.append(...liRefs);
