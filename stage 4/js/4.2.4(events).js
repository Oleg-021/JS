/** СОБЫТИЯ */

/** 1. Навешивание событий */
const btn = document.querySelector("button");
const link = document.querySelector("a");
console.log(btn);

/* 1) onclick (свойство)
    !!! недостатком этого способа является то, что нельзя навесить множество обработчиков */
const click1 = function () {
    console.log("Click1");
    console.log(this);
};
btn.onclick = click1;

/* 2) addEventListener - добавляет обработчки события к элементу DOM
*     Синтаксис: элемент.addEventListener(тип_события, функция_обработчик(объект_события), объект настройки)
*                                   * тип события - click, mouseover, mousemove, contextmenu и т.д.
*                                   * функция-обработчик - принимает объект с событием в качестве входного параметра
*                                   * объект настройки
* */
const click2 = function (e) {
    console.log("Click2");
    console.log(e);
};
btn.addEventListener("click", click2);
btn.addEventListener("click", (e) => {
    console.log(e + " click 3");
    console.log(this);
});

link.addEventListener("click", function (e) {
    e.preventDefault(); // - метод, убирающий действия элемента по-умолчанию
    console.log("link clicked");
});

/** 2. Удаление событий */
/* removeEventListener - удаляет обработчик события
*     Синтаксис: элемент.removeEventListener(тип_события, функция_обработчик)
* */
btn.removeEventListener("click", click2);

/** 3. Делегирование события */
const container = document.querySelector("div");
container.classList.add("container");

btn.addEventListener("click", (e) => {
    const div = document.createElement("div");
    const nestedBtn = document.createElement("button");
    nestedBtn.textContent = "Button";
    div.textContent = `Случайное число 0-1000: ${Math.round(Math.random() * 1000)}`;
    div.appendChild(nestedBtn);
    container.appendChild(div);
});

container.addEventListener("click", (e) => {
    // target - указывает на элемент, куда произошло нажатие в рамках контейнера
    if(e.target.tagName === "BUTTON")
        console.log("button clicked");
});