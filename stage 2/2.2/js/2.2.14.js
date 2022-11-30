/* Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

Функция должна корректно работать с объектом Date
getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

Функция должна корректно рабоать со значениями в миллисекундах
getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

Если входные параметры - невалидные даты, то функция вовращает NaN:
    getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
getDaysBetweenDates(null); // -> TypeError

new Date(null) - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time */

const getDaysBetweenDates = (...restArgs) => {
    if (restArgs.length < 2)
        throw new TypeError("TypeError");

    const date1 = new Date(restArgs[0]).getTime(),
        date2 = new Date(restArgs[1]).getTime();
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    let result = Math.trunc(Math.abs(date1 - date2) / dayInMilliseconds);

    if (result === -0)
        result = 0;

    return date1 > date2 && result !== 0 ? -result : result;
};

console.log(new Date(null));
console.log(getDaysBetweenDates('1-1-2020', '1-2-2020')); // -> 1
console.log(getDaysBetweenDates('1-1-2020', 'дата')); // -> NaN
console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))); // -> 366
console.log(getDaysBetweenDates(1409796000030, 1409796000000)); // -> 1
//console.log(getDaysBetweenDates(null)); // -> TypeError

