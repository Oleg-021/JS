/* Реализуйте функцию getField, которая принимает массив объектов
 в качестве первого аргумента и ключ объекта в строке в качестве второго.
 Функция должна вернуть новый массив. На месте объекта должно находиться значение поля объекта,
 находящееся по ключу, переданному в функцию вторым аргументом. Массив гарантированно состоит из объектов.
 Если в данном объекте, нет такого поля, то вместо значения поля должен быть undefined.
 Если массив не передан, то функция должна вернуть пустой массив.

Пример:

const data = [
  {
    name: 'Denis',
    age: 25,
  },
  {
    name: 'Ivan',
  },
  {
    name: 'Ann',
    age: 18,
  },
];

console.log(getField(data, 'age'));
// [25, undefined, 18] */

// 1. решение циклом
/*const getField = (data, field) => {
    let newArr = [];

    for (let i=0; i<data.length; i++)
        if (data[i][field])
            newArr.push(data[i][field]);
        else
            newArr.push(undefined);

    return newArr;
};*/

// 2. решение foreach
/*const getField = (data, field) => {
    let resulArr = [];

    data.forEach(function (element) {
        if (element[field])
            resulArr.push(element[field])
        else
            resulArr.push(undefined);
    });

    return resulArr;
};*/

// 3. решение map
const getField = (data, field) => {
    return data.map(element => element[field]);
}



const data = [
    {
        name: 'Denis',
        age: 25,
    },
    {
        name: 'Ivan',
    },
    {
        name: 'Ann',
        age: 18,
    },
];

console.log(getField(data, "name"));
console.log(getField(data, "age"));