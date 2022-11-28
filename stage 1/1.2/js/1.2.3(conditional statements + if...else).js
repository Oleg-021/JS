/** Условные Операторы
 * < - меньше
 * <= - меньше или равно
 * > - больше
 * >= - больше или равно
 * == - нестрогое равенство
 * === - строгое равенство
 * != - нестрогое неравенство
 * !== - строгое неравенство
 **/
let value;
value = 1 > 2; // false
value = 2 <= 2; // true
value = 1 == 1; // true
value = 1 == 'stage 1'; // true, так как нестрогое равенство приводит к единому типу и не учитывает тип данных
value = 1 === 'stage 1'; // false

// сравнение строк
value = 'a' > 'a'; // false
value = 'a' > 'A'; // true, так как 'А' имеет меньший юникод, чем 'а'
value = 'a' > 'ab'; // false
value = 'a'.charCodeAt(); // возвращает юникод символа

/** IF ... ELSE
 * if (условие) {
 *  действие, если true
 * } else {
 *  действие, если false
 * }
 * **/
value = 10;
if (value === 10) {
   console.log('value: ' + value); // выполнит это действие
} else {
    console.log('else');
}

if (value)
    console.log('some actions: ', value);
else
    console.log('else: ', value); // выполнится, если value === Nan, undefined, 0, '', false, null

/** Логические операторы
 * ! - логическое НЕ (два !! можно использовать для преобразования небулевого значения в булевое)
 * // - логическое ИЛИ (пытается преобразовывать к true)
 * ?? - логическое И (пытается преобразовывать к false)
 */
let name = ''
value = name || 'Fyodor'; // Fyodor

// промерка массивов
value = [];
if (value)
    console.log(value);

if (value.length)
    console.log(value);
else
    console.log('array is empty')

if (Array.isArray(value))
    console.log('is array');
else
    console.log('is not array')

// проверка массивов
let user = {
    name: 'Ivan',
    surname: 'Ivanov',
}
if(user.hasOwnProperty('name')) // проверка на имя ключа
    console.log(user.name);
else
    console.log('is empty');







