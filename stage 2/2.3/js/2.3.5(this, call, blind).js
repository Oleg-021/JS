/** THIS / CALL / BIND / APPLY
 * this - указывает на текущий контекст
 * bind - возвращает новую функцию с заданным контекстом и параметрами (функция.bind(контекст, ...параметры_функции))
 * call - вызывает функцию с заданным контекстом и параметрами (функция.bind(контекст, ...параметры_функции))
 * apply - вызывает функццию с заданным контекстом и параметрами (функция.apply(контекст, [массив_параметров_функции]))
 */

const someObj = {
    name: "Some Object"
};

function hello() {
    console.log("Hello " + this.name);
}

const person = {
    name: "Roman",
    age: 23,
    sayHello: hello,
    sayHelloGlobal: hello.bind(someObj), // задаём контекст функции sayHelloGlobal объектом someObj
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone number: ${phone}`);
        console.groupEnd();
    }
}

hello();
person.sayHello();
person.sayHelloGlobal();
person.logInfo();

const lena = {
    name: "Elena",
    age: 23,
}
const andrei = {
    name: "Andrei",
    age: 34,
}

const bindLenaLogInfo = person.logInfo.bind(lena); // возвращает новую функцию logInfo с контекстом lena
const bindAndreiLogInfo = person.logInfo.bind(andrei, "tester", 87654);
person.logInfo();
bindLenaLogInfo("programer", 52926);
bindAndreiLogInfo();
person.logInfo.call(lena, "tester", 87654);
person.logInfo.apply(andrei, ["tester", 87654]);

// ===========================

const arr = [1, 33, 45, 2, 13];

// 2 способа создания для массивов функций
function simpleMyltBy(num, arr) {
    return arr.map(function(item) { return item * num });
}

Array.prototype.protoMultBy = function (num) {
    return this.map(function(item) { return item * num });
}

console.log(simpleMyltBy(5, arr));
console.log(arr.protoMultBy(7));