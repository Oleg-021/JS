/** 1. ВСПЛЫТИЕ СОБЫТИЙ
 *      * Если на дочернем и родительском элементе висит одинаковый тип событий, то в процессе работы события на вложенном
 *      элементе срабатывает и событие родительского элемента;
 *
 *      !!! Для остановки всплытия событий родительского элемента, в функцию обработчик дочернего элемента нужно
 *      добавить метод stopPropagation() на объект события.
 * */
const btn = document.querySelector("button.btn");
const wrap = document.querySelector("div.wrap");

// блокируем всплытие
btn.addEventListener("click", (e) => {
    console.log("clickBtn");
    e.stopPropagation(); // - блокирует всплытие событий родительских элементов
});

wrap.addEventListener("click", (e) => {
    console.log("clickWrap");
    e.stopPropagation();
});

document.body.addEventListener("click", (e) => {
    console.log("clickBody");
});

/** 2. ПОГРУЖЕНИЕ СОБЫТИЙ
 *      * Процесс, когда событие начинает отрабатывать с обёрточного элемента, погружаясь вниз;
 *      * За погружение событий в процессе его добавления при помощи метода addEventListener отвечает свойство
 *      capture третьего входного параметра, а именно объекта-настройки;
 */

// формируем процесс погружения для btn
wrap.addEventListener("click", (e) => {
    console.log("clickWrap");
    //e.stopPropagation();
}, true);

document.body.addEventListener("click", (e) => {
    console.log("clickBody");
}, {capture: true});