/** prototype / __proto__
 *
* 1. __proto__ - ссылка на prototype класса/функции из которого был создан
 * ! есть у всех объектов (сам __proto__ - объект)
 * ! разные __proto__ разных по типу объектов - совершенно независимые объекты, но у одинаковых по типу объектов они равны (один и тот же объект)
 * ! Нужен для того, чтобы связаться с прототипом класса, из которого объект был создан
 *
 * 2. prototype
 * ! Любой класс(function-constructor) имеет прототип (prototype) - есть только у class/function
 * ! Каждый прототип - это отдельный объект с определённым набором свойств
 * ! У стрелочных функций нет прототипа(prototype), так как они не могут быть конструкторами классов
 *
 * 3. Для чего нужен prototype?
 * Если мы пытаемся прочитать свойство объекта, либо вызвать метод, а его нет, то объект полезет искать это
 * свойство/метод через ссылку __proto__ в prototype класса, с помощью которого он был создан.
 *
 */

// класс Samurai1...
function Samurai1(name) {
    this.name = name;
}
Samurai1.prototype.hello = function () {
    console.log(this.name + " Hello")
};

//...идентичен классу Samurai2
class Samurai2 {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(this.name + "Hello");
    }
}

const shogun = new Samurai2("Step");

console.log(shogun.__proto__ === Samurai2.prototype);
console.log(Samurai2.__proto__ === Function.prototype);
console.log(shogun.__proto__.__proto__ === Function.prototype)



/*

let man = {}; // __proto__
let users = []; // __proto__
let age = 18; // __proto__
let string = "some text"; // __proto__
let bool = true; // __proto__
let func = function () {}; // __proto__
class Class {} // __proto__

console.log(man.__proto__ === users.__proto__); // false
console.log(man.__proto__ === {}.__proto__); // true, так как один и тот же тип
console.log(man.__proto__ === Object.prototype); // true, __proto__ ссылкается на объект.prototype



class Car {
    constructor(model, mark) {
        this.model = model;
        this.mark = mark;
    }
}

let bmw540i = new Car("BMW", "540i");
let audiA6 = new Car("Audi", "A6");
let mercedes = new Car("Mercedes", "e400");

function Func() {}

console.log(bmw540i.__proto__);
console.log(bmw540i.prototype);
console.log(Car.prototype);
console.log({}.prototype);
console.log({}.__proto__);
console.log(Func.prototype);
console.log(func.__proto__);*/