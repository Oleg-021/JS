/* Реализуйте функцию, которая принимает на вход два числа и арифметический оператор (имя которого в виде строки)
и возвращает результат соответствующей операции.

Первые stage 2 аргумента это положительные целые числа
Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".

Примеры использования:
arithmetic(5, stage 2, "add")      => returns 7
arithmetic(5, stage 2, "subtract") => returns 3
arithmetic(5, stage 2, "multiply") => returns 10
arithmetic(5, stage 2, "divide")   => returns stage 2.5
В случает если оператор некорректен, функция должна возвращать NaN
arithmetic(5, stage 2, "aaa")      => returns NaN */
const arithmetic = (a, b, operator) => {
    switch (operator) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return a / b;
        default: return NaN;
    }
};

console.log(arithmetic(15, 2, 'add'));
console.log(arithmetic(23, 10, 'subtract'));
console.log(arithmetic(11, 22, 'multiply'));
console.log(arithmetic(99, 33, '/'));
console.log(arithmetic(21, 23, '++'));


