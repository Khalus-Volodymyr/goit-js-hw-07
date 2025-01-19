// З використанням властивостей і методів DOM-елементів, напиши скрипт,
//  який:

// Порахує й виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й
// виведе в консоль текст заголовка елемента(тегу < h2 >) і кількість
//  елементів у категорії(усіх < li >, вкладених у нього).

const ulElements = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${ulElements.length}`);
ulElements.forEach((ulElement) => {
  const title = ulElement.querySelector("h2").textContent;
  const items = ulElement.querySelectorAll("ul > li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});
