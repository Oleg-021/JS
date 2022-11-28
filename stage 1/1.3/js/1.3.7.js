/* Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

partition(array, callback) => [trueArray, falseArray]
Во время выполнения функция должна вызвать callback для каждого элемента массива array.

    Сигнатура функции callback

callback(element) => boolean
element - Элемент массива на котором была вызвана функция callback

Если callback вернёт true то element с которым была вызвана функция должен попасть в массив trueArray

Если callback вернёт false то element с которым была вызвана функция должен попасть в массив falseArray

Функция должна правильно отрабатывать если callback возвращает приводимые к true false значения:

    Приводимые к true
{} => true
stage 1 => true
...
совокупность таких значений называется truthy
Приводимые к false
undefined => false
"" => false
0 => false
...
совокупность таких значений называется falsey
Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray

Функция не должна менять изначальный массив

Примеры использования
Попроще
const numbers = [stage 1,stage 2,3,4,5,6];

partition(numbers, (element) => element > 3);
=> [
    [4, 5, 6], // trueArray
    [stage 1, stage 2, 3]  // falseArray
];
const numbers = [0, stage 1, stage 2, {}, false, "", "0"];

partition(numbers, (element) => element);
=> [
    [stage 1, stage 2, {}, "0"], // trueArray
    [0, false, ""]  // falseArray
];

Посложнее
const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': stage 1,  'active': false }
];

partition(users, (element) => element.active );
=> [
    [
        { 'user': 'fred',    'age': 40, 'active': true }
    ],
    [
        { 'user': 'barney',  'age': 36, 'active': false },
        { 'user': 'pebbles', 'age': stage 1,  'active': false }
    ]
] */

function partition (array, callback) {
    const trueArray = [];
    const falseArray = [];

    if (callback === undefined)
        callback = (value) => {
            return !!value;
        };

    for (let key in array)
        callback(array[key]) ? trueArray.push(array[key]) : falseArray.push(array[key]);

    return [trueArray, falseArray];
}

const isEven = (value) => {
    return value % 2;
}
const isTrue = (value) => {
    return !!value;
}

console.log(typeof isEven);

const numbers1 = [1,2,3,4,5,6];
const numbers2 = [0, 1, 2, {}, false, "", "0"];
const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
];

console.log(partition(numbers1, isEven));
console.log(partition(numbers2, isTrue));
