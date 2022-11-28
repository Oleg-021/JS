/** СТРЕЛОЧНАЯ ФУНКЦИЯ
 * имя_переменной_функции = (аргументы) => {
 *     тело функции
 * }
 *
 * */

// 1. Короткая запись (не требует прописывать return)
const arrowFunc = (x = 0, y = 0) => x + y;
console.log(arrowFunc(2, 22));

// 2. Если нет аргументов
const arrowWithoutArg = () => console.log("Hello World!");
arrowWithoutArg();

// 3. Если 1 аргумент (можно без скобок)
const arrowOneArg = (x) => (x * 100);
console.log(Math.round(arrowOneArg(1.11)));

// 4. Если нужно писать больше, чем 1 строку
const extendedArrowFunc = (x = 0, y = 0) => {
    x = x * 2;
    y = y * 3;
    return x * y;
};
console.log(extendedArrowFunc(3, 12));


const returnObj1 = (str = "") => {
    return {
        value: str,
        length: str.length,
    };
};
// либо сокращённая форма
const returnObj2 = (str = "") => ({
        value: str,
        length: str.length,
    });
console.log(returnObj1("My name is Pavel"));
console.log(returnObj2("My name is Georg"));

/** ОСНОВНЫЕ ОТЛИЧИЯ ОТ ОБЫЧНОЙ ФУНКЦИИ */
// 1. У обычной функции есть псефдоколлекция arguments, хранящий все аргументы, которые хранит функция
const simpleFunc = function (a, b, c, d) {
    console.log(arguments);
    return a + b + c + d;
};
console.log(`result: ${simpleFunc(2,3,4,5)}, arguments: ${simpleFunc.arguments}`);

// 2. Стрелочные функции не имеют собственного контекста, поэтому this ссылается на уровень выше
const obj = {
    firstname: "Oleg",
    lastName: "Ivanov",
    age: 23,
    getFirstName() {
        return this.firstname;
    },
    getLastName: function () {
        return this.lastName;
    },
    getAge: () => this.age,
};
console.log(obj.getFirstName()); // "Oleg"
console.log(obj.getLastName()); // "Ivanov"
console.log(obj.getAge()); // undefiend

