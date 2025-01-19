// Напиши скрипт, який змінює колір фону елемента < body > через
// інлайн - стиль по кліку на button.change - color і задає це
// значення кольору текстовим вмістом для span.color.
// Зверни увагу, що функція getRandomHexColor() повертає колір у
// hex-форматі, в той час як колір фону на <body> буде у форматі rgb.
// Це нормально й не потребує якихось правок.

// На що буде звертати увагу ментор при перевірці:

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим
// рандомним кольором
// На <body> і span.color значення одного й того самого кольору

const elem = document.querySelector("body");
const but = elem.querySelector(".change-color");
const butItem = elem.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick() {
  const changcolor = getRandomHexColor();
  elem.style.backgroundColor = changcolor;
  butItem.textContent = changcolor;
}

but.addEventListener("click", handleClick);
