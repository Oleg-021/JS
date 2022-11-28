/**THIS
 * this - это контекст вызова функции
 */

//Две эквивалентные записи вызова текущего контекста
// stage 1
function getThis() {
    console.log(this);
}
//getThis();

// stage 2
//window.getThis();

const prod1 = {
    name: "Intel",
    price: "100",
    getPrice: function () {
        console.log(this.price);
    },
    getName() {
        console.log(this.name);
    },
    info : {
        information : ['stage 2.3ghz'],
        getInfo: function () {
            console.log(this);
        }
    }
}
prod1.getPrice();
prod1.info.getInfo();


//Для создания возможности вывода цепочти методов, методам нужно возвращать текущий контекст словом this
const getPrice = function (currency = "$") {
    console.log(currency + this.price);

    return this;
}
const getName = function () {
    console.log(this.name);

    return this;
}

getPrice();
prod1.getPrice = getPrice;
prod1.getPrice();

let str = "Hello World!";
const reverseStr = str
    .split("") // [массив символов строки]
    .reverse() // [массив в обратном порядке]
    .join(""); // string - строка, состоящая из склеенных элементов массива
console.log(reverseStr);


const prod3 = {
    name: "AMD",
    price: "100",
    getPrice,
    getName,
};

prod3.getName()
    .getPrice();

/** CALL
 * имя_функции.call(контекст_вызова, ...параметры)
 * */
const prod4 = {
    name: "Razor",
    price: "300",
    //getPrice,
    //getName,
};
getPrice.call(prod4, "*");

/** APPLY
 * имя_функции.call(контекст_вызова, [массив_параметров])
 */
getPrice.apply(prod4, ["+"]);



/** ПОТЕРЯ КОНТЕКСТА
 *  имя_функции.bind(контекст, ...привязанные_аргументы) - метод bind возвращает функцию с привязанным контекстом
 * */
const getPriceBind = prod3.getPrice.bind(prod3, "*");

setTimeout(prod3.getPrice, 2000); // Потеря контекста происходит из-за того, что setTimeout
// имеет контекст window(глобальный), не имея поля price
setTimeout(getPriceBind, 2000);




