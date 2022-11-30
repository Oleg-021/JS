/* Напишите функцию isEmpty, которая возвращает true, если у объекта
нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

const obj = Object.create(null);
isEmpty(obj); // -> true
isEmpty({ prop: 'value' }); // -> false
Напишите функцию isEmptyWithProtos, которая возвращает true, если
у объекта и его прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
isEmptyWithProtos(obj); // -> true
isEmptyWithProtos({}); // -> false */

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function isEmptyWithProtos(obj) {
    for (let key in obj)
        return false;
    return true;
}

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
const user = {
    name: "Ivan",
    age: 22
};

console.log(isEmpty(protoObj));
console.log(isEmpty(obj));
console.log(isEmpty(user));




