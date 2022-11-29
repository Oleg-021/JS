/*Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.

Пример:
invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }
 */


/* Решение 1
function invert (obj) {
    let result = {},
        keys = Object.values(obj),
        values = Object.keys(obj);

    for (let i=0; i<keys.length; i++)
        result[keys[i]] = values[i];

    return result;
}*/

// Решение 2
function invert (obj) {
    /*let invertedEntryMap = Object.entries(obj);
    invertedEntryMap.forEach(entry => {
       let key = entry[1];
       entry[1] = entry[0];
       entry[0] = key;
    });

    return Object.fromEntries(invertedEntryMap);*/


    return Object.fromEntries(Object.entries(obj).map(entry => [entry[1], entry[0]]));
}



const obj = { a: 1, b: 2, c: 3 };
const objTest = {1: "a", 2: "b", 3: "c"}
console.log(obj);
console.log(invert(obj));