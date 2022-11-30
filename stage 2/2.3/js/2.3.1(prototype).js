/** PROTOTYPE */
const person1 = {
    name: "Max",
    age: 24,
    greet: function () {console.log(this.name + " greet!")}
};

const person2 = new Object({
        name: "Max",
        age: 24,
        greet: function () {console.log("greet!")}
});


console.log(person2);

// 1. Измение свойств класса (Object.prototype) - имя_класса.prototype.поля_класса
Object.prototype.sayHello = function () {
    console.log(this.toString() + " Hello!");
}
person2.sayHello()

// 2. Создание объекта на основе прототипа (Object.create) - Object.create(объект_прототип)
const lena = Object.create(person1);
lena.greet(); // Max greet!
console.log(lena.name); // Max
lena.name = "Elena";
lena.greet(); // Elena greet!
lena.sayHello();

// 3. Создание класса
function Car(mark, model, price, gas = 45) {
    this.mark = mark;
    this.model = model;
    this.price = price;
    this.gas = gas;
    this.drive = function (){
        if (this.gas > 0) {
            this.gas -= 10;
        } else {
            console.log("Кончилось топливо");
            this.gas = 0;
        }
    };

}
const bmw = new Car("BMW", "540i", 54640, 70);
const nissan = new Car("Nissan", "370z", 44500);
console.log(bmw);
bmw.drive();
console.log(bmw);
console.log(nissan);

//Решение вопроса создания копий методов
console.log(bmw.drive === nissan.drive); // - false, т.к. при создании объектов создаются и копии методов объектов, что занимает лишнее пространство
Car.prototype.drive = function () {
    if (this.gas > 0) {
        this.gas -= 10;
    } else {
        console.log("Кончилось топливо");
        this.gas = 0;
    }
};
console.log(bmw.drive === nissan.drive); // - было бы true, т.к. функция указана в prototype, если бы функция не была указана в свойствах класса
// !!! сперва JS ищет в свойствах класса, а потом заходит в прототип

// 4. Получение функции-конструктора, создающего объект
console.log(bmw.constructor); // Показывает функцию, на основе которой был создан объект bmw

// 5. Проверка на объект класса (instanceof)
console.log(bmw instanceof Car); // true
console.log(bmw instanceof Object); // true
console.log(bmw instanceof Number); // false