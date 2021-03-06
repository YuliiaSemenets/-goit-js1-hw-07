const categoriesRef = document.querySelector('#categories');

console.log(`В списке ${categoriesRef.children.length} категории.`);

const categoriesItemRef = document.querySelectorAll("li.item");
console.log(categoriesItemRef)

categoriesItemRef.forEach((element) => {
    console.log(`Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.querySelectorAll("li").length}`)
})
