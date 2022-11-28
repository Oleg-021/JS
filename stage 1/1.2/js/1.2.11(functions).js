/** ФУНКЦИИ */

/** Function Declaration
 * function (входные_параметры) {
 *     тело функции
 * }
 * !Особенности!
 * stage 1. являются всплывающими, как и var
 * stage 2. доступны в любом месте кода
 *
 * функции не должны переопределять значения переменных вне функции
 */

// функция без входящих значений
function sayHello() {
    console.log("Hello");
}
sayHello();

let user = {
    name: "Oleg",
    lastname: "Ivanov",
    age: 19,
}

// функция со входными значениями
function funcWithParam(user) {
    user.name = "Stepan";
    user.age = 23;

    return user;
}

console.log(funcWithParam(user));
console.log(user);


/** Function Expression
 * var/let/const имя_функции = function (параметры_функции) {
 *     тело функции
 * }
 * !Особенности!
 * stage 1. не является всплывающей, поэтому не может быть вызвана до декларации(присвоения в переменную)
 * stage 2. может иметь локальную область видимости
 * */
const expFunction = function (a = -1, b = -1, c = -1) {
    return a + b + c;
}
console.log(expFunction(1, 2,3));

/** Самовызывающаяся функция
 * (function (параметры_функции) {
 *     тело функции;
 * })(входящие_данные);
 *
 * ! В такие функции обычно заворачивают JavaScript файлы, таким образом закрывая весь функционал внутрь функции
 * */
let val = (function (a = -1, b = -2, c = -3) {
    return a * b - c;
})(22, 11, 33);
console.log(val);

/** Установка входных значений по-умолчанию */
function newFunc(a = -1, b = -1) {
    return a + b;
}
console.log(newFunc(null, 3));

let x = 10;
function foo() {
    let x = 20; // локальна зона видимости, так как объявлена локально
    console.log(x);
}
foo();
console.log(x);