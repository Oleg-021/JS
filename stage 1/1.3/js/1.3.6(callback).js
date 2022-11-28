/** ФУНКЦИИ ВЫСШЕГО ПОРЯДКА (callback)
 * Функции высшего порядка - это функции, которые принимают в качестве параметров другие функции или возвращают функции
 */

function arrMap() {

}

const names = ["Oleg", "Ivan", "Pavel", "Alexander"];
let lengthElementArr = [];
console.log(names);

//Массив количества букв в элементе
for (let i=0; i<names.length; i++) {
    lengthElementArr.push(names[i].length);
}
console.log(lengthElementArr);

//Массив верхнего регистра
let upperArr = [];
for (let i=0; i<names.length; i++)
    upperArr.push(names[i].toUpperCase());
console.log(upperArr);

/** Функция высшего порядка */
function mapArray (arr, func){
    const result = [];

    for (let i=0; i<arr.length; i++)
        result.push(func(arr[i]));

    return result;
}

function nameLength (element) {
    return element.length;
}
function toUpper (element) {
    return element.toUpperCase() + "!";
}

console.log(mapArray(names, nameLength));
console.log(mapArray(names, toUpper));

/** Возвращение функции, лежащей в функции */
function greeting(firstname) {
    return function (lastname) {
      return `Hello ${firstname} ${lastname}`
    };
}
//способ вызова stage 1
const testGreeting = greeting("Ivan");
console.log(testGreeting);
let val = testGreeting("Ivanov");
console.log(val);
//способ вызова stage 2
console.log(greeting("Stepan")("Stepanov"));

