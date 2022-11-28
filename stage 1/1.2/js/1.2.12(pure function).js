/** ЧИСТЫЕ ФУНКЦИИ
 * Чистая функция - это функция, которая:
 * stage 1. зависит только от своих входных аргументов и всегда возвращает одно и то же значение при одних и тех же входных аргументах;
 * stage 2. не имеет побочных эффектов: не изменяет входных аргументов и не изменяет переменных вне функции.
 *
 * Плюсы ЧИСТЫХ ФУНКЦИЙ
 * stage 1. Очень удобно и просто тестировать
 * stage 2. Гораздо проще отслеживать управление функции
 */

// Пример ЧИСТОЙ ФУНКЦИИ
const changePurePoint = function (point) {
    let copyPoint = Object.assign({}, point);

    copyPoint.x = point.x + 20;
    copyPoint.y = point.y - 30;

    return copyPoint;
}

//Пример ГРЯЗНОЙ ФУНКЦИИ
const changeDirtyPoint = function (point) {
    point.x = point.x + 23;
    point.y = point.y - 33;

    return point;
}
const randomize = function (x) {
    return x * Math.random();
}

let coordinates1 = {
    x: 120,
    y: 22,
};
let coordinates2;

coordinates2 = changePurePoint(coordinates1);
console.log(coordinates1);
console.log(coordinates2);

changeDirtyPoint(coordinates1);
console.log(coordinates1);
