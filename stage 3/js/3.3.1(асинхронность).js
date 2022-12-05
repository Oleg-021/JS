/** АСИНХРОННОСТЬ
 *
 * 1. setTimeout(функция, задержка(миллисекунд), параметры_функции) - устанавливает счётчик времени через которое выполнится функция
 *      функция setTimeout возвращает счётчик(идентификатор_таймера)
 *      Пример: let timerId = setTimeout(функция, задержка, параметры_функции);
 *
 * 2. setInterval(функция, задержка(миллисекунд), параметры_функции) - аналог setTimeout, но запускается переодически
 *      Пример: let timerId = setInterval(функция, задержка, параметры_функции);
 *
 * 3. clearTimeout(идентификатор_таймера) - удаляет функцию из асинхронной очереди
 *      Пример: clearTimeout(timerId);
 *
 * 5. Вложенный setTimeout
 *      Вместо setInterval можно использовать вложенный друг в друга setTimeout, это даёт
 *      ! большую гибкость в ограничении количество вызовов функции
 *      ! позволяет задать более точную задержку между выполнением функций
 *
 * 6. setTimeout с нулевой задержкой
 *      Пример: setTimeout(функция, 0) или setTimeout
 *      ! используется для вызова функции, которая должна быть вызвана максимально быстро после завершения исполнения основного кода
 *
 * !!! Браузер ограничивается 4-мя миллисекундами минимальной задержки между пятью и более вложенными вызовами setTimeout,
 *     а также для setInterval, начиная с 5-го вызова.
 *
 * */

function timeoutTwoSeconds () {
    console.log("Timeout 2 sec ")
}


setTimeout(timeoutTwoSeconds, 0);

setTimeout(function () {
    console.log("Timeout after 2 seconds");
}, 2000);

console.log("start");
console.log("start 2");
let j = [];

for (let i=0; i<100000000; i++) {
    j[i] = i * 3;
}

console.log("end");

function first () {
    let arr = [];
    for (let i=0; i<10000000; i++)
        arr.push(i);

    console.log("first");
    return arr;
}
function second() {
    console.log("second");
}

first();
second();