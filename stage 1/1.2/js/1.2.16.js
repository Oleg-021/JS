/* Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true,
если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.

Пример:
const data1 = [false, true, [stage 1, stage 2], {}, [], stage 1, 0, NaN];
console.log(hasArrays(data1));
// true

const data2 = [];
console.log(hasArrays(data2));
// false */

const hasArrays = (arr) => {
    for (let i=0; i<arr.length; i++)
        if (Array.isArray(arr[i]))
            return true;

    return false;
};