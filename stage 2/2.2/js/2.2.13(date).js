/** DATE
 * Объект Date - представляет собой момент времени. Объекты даты Date
 * основываются на значении количества миллисекунд, прошедших с 1 января 1970 года
 * в часовом поясе UTC.
 * */

// 1. Создание (конструктор)
// * Пустой конструктор: текущая дата и время (по умолчанию в локальном времени)
let currentDate = new Date();
console.log(currentDate);
// * new Date(value): value - количество миллисекунд от 01.01.1970
let constDate1 = new Date(887868665888);
console.log(constDate1);
// * new Date(dateString): dateString - текстовое представление даты
let constDate2 = new Date("June 16 2006");
console.log(constDate2);
// * new Date(year, month[, day[, hour[, minute[, second[, millisecond]]]]]): год(year) и месяц(month) - два обязательных параметра конструктор
let constDate3 = new Date(Date.UTC(2001, 5, 22, 7, 30, 54)); // - 23.06.2001 7:30:54 UTC
console.log(constDate3);

// 2. Date.now() - возвращает количество миллисекунд пройденных от 01.01.1970 на момент вызова функции
console.log(Date.now());

// 3. Date.parse(строковое_представление_времени) - преобразует строковое представление в миллисекунды от 01.01.1970
console.log(Date.parse("2001-06-23"));

// 4. Date.UTC(дата) - представляет дату в UTC формате, возвращая миллисекунды
console.log(Date.UTC(2001, 5, 23, 7, 11));

console.log("milliseconds: " + constDate3.getMilliseconds());
console.log("seconds: " + constDate3.getSeconds());
console.log("minutes: " + constDate3.getMinutes());
console.log("hours: " + constDate3.getHours());
console.log("day of week: " + constDate3.getDay());
console.log("month day: " + constDate3.getDate());
console.log("month: " + constDate3.getMonth());
console.log("current year: " + constDate3.getFullYear());

