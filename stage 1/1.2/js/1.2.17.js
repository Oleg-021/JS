/* Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку
"even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из
четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd".

Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".

const data = [stage 1, stage 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even')); // [stage 2, 4, 6];
console.log(getNumbersByParity(data, 'odd')); // [stage 1, 3, 5]; */

const getNumbersByParity = (data, parity) => {
    let oddArr = [], evenArr = [];

    for (let i=0; i<data.length; i++)
        if (data[i] % 2)
            oddArr.push(data[i]);
        else
            evenArr.push(data[i]);

    switch (parity) {
        case "even": return evenArr;
        case "odd": return oddArr;
        default: return [];
    }
};

const data = [1, 2, 3, 4, 5, 6];
console.log(getNumbersByParity(data, 'even')); // [stage 2, 4, 6];
console.log(getNumbersByParity(data, 'odd')); // [stage 1, 3, 5];