/** ЗАМЫКАНИЕ
 * Замыкание - это функция внутри другой функции
 * Замыкание - это по сути закрытие функции на определённую область видимости, а область видимости на функцию (аналог private)
 * функция = код функции + доступные данные
 * */

function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    }
}
createCalcFunction(42);
const calc = createCalcFunction(32);
calc();
// или
createCalcFunction(32)();


function createIncrementor(n) {
    return function (num) {
        return n + num;
    }
}
const addOne = createIncrementor(1);
const addTen = createIncrementor(10);
const addHundred  = createIncrementor(100);
console.log(addTen(11));


function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}

const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");
console.log(comUrl("google"));
console.log(comUrl("netflix"));
console.log(ruUrl("vk"));
console.log(ruUrl("yandex"));


function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    }
}



function cs2 () {
    let c = 0;

    return function () {
        c++;
        console.log(c);
    }
}
let pushBottom = cs2();
pushBottom();
pushBottom();