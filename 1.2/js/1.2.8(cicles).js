/** ЦИКЛЫ */

/** WHILE
 * while (условие - true) {
 *     тело цикла;
 *     изменение условия;
 * }
 */
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
//упрощённая форма
i = 0;
while (i++ < 10) {
    console.log(i - 1);
}

/** DO...WHILE
 *  do {
 *      тело цикла;
 *      изменение условия;
 *  } while (условие - true)
 */
i = 0
do {
    console.log(i);
    i += 10;
} while (i < 100);

/** FOR
 * for (инициализация итератора; условие; изменение итератора) {
 *     тело цикла;
 * }
 */

let str = 'Hello';
let res = [];
for (let i = 0; i < str.length; i++) {
    console.log(str[i] + '!');
    res.push(str[i]);
}
console.log(res);
console.log(i);

/** BREAK, CONTINUE */
let j = 0
while (j < 100) {
    if (j % 2) {
        j++;
        continue; // переход на следующее повторение цикла
    }

    if (j === 50)
        break; // прерывание цикла

    console.log(j);
    j++;
}

/** FOR...IN
 *  for (объявление ключа in объект/массив) {
 *      тело цикла;
 *  }
 */
let user = {
    name: 'Ivan',
    surname: 'Stepanov',
    age: 22,
    city: 'Moscow',
}
for (let key in res)
    console.log(`${key} : ${res[key]}`);

/** FOR...OF
 * for (объявление значения of массив) {
 *      тело цикла;
 *  }
 */
for (let value of res)
    console.log(value);

