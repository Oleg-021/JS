/* Реализуйте функцию createObjectCalculator, которая принимает в
качестве аргументов два числа, а возвращает следующий объект:

Объект calculator (калькулятор) с тремя методами:
read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

Гарантируется, что оба числа, передаваемых в read всегда будут числами.

Пример:
const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408

*/

const createObjectCalculator = (initialA, initialB) => {
    let result = {};

    result.a = initialA;
    result.b = initialB;

    result.read = function (a, b) {
        this.a = a;
        this.b = b;
    }

    result.sum = function () {
        return this.a + this.b;
    }

    result.mul = function () {return this.a * this.b};

    return result;
};

const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408
