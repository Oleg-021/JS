/** CONSTRUCTOR */
// 1. Конструктор
const Person = function (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
};
Person.prototype.getInfo = function () {
    return `Person name is ${this.name} ${this.surname}. He is ${this.age} years old.`;
}

const ivan = new Person("Ivan", "Suvorov", 23),
        pavel = new Person("Pavel", "Lobaev", 43);

console.log(ivan.getInfo());
console.log(pavel.getInfo());

// 2. Принадлежность к классу (instanceof)
console.log(ivan instanceof Person); // true
console.log(ivan instanceof String); // false

// 3. Получение функции-конструктора объекта (constructor)
ivan.constructor.prototype.getName = function () {return this.name};
console.log(ivan.getName());

// 4. Получение свойства-прототип у объекта (__proto__)
console.log(ivan.__proto__);

// 5. Наследование классов
// способ 1
Developer = function (name, skills) {
    Person.apply(this, arguments);
    this.skills = skills || [];
};
// способ 2 - Object.create
Developer.prototype = Object.create(Person.prototype);

