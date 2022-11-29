/* Реализуйте функцию sum, которая принимает неограниченное количество чисел в качестве аргументов и возвращает их сумму.
Вызов функции без аргументов должен вернуть 0.
В случае, если аргумент не является числом и не может быть приведен к таковому, нужно проигнорировать его.
Если его можно привести к числу, то приведите его и прибавьте, как и обычное число.

Пример использования:

console.log(
    sum(1, 2, 3, 4, 5, 6),
); // 21
console.log(
    sum(-10, 15, 100),
); // 105
console.log(
    sum(),
); // 0
console.log(
    sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
); // 11. Прим: true было приведено к 1 (см. преобразование типов в js) */

const sum1 = (...args) => {
    return args.reduce((acc, element) => {
        let newResult = acc + element;

        if (typeof (acc + element) === "number" && !Number.isNaN(newResult))
            return newResult;
        else
            return acc;
    }, 0);
};

const sum = (...args) => {
    return args.filter(element => Number(element)).reduce(((acc, number) => acc + number),0);
}


console.log(sum(NaN, undefined, 'fwqf', {}));
console.log()

