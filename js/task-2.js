const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector("#ingredients");

const elementList = ingredients.map((ingredient) => {
    
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;

    return listItem;
});
ingredientsList.append(...elementList);

console.log(ingredientsList);