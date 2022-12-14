/* Нужно написать функцию, которая переводит двумерный массив (массив массивов) в
CSV формат и возвращать строку О формате: https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")


Допустимые значения в качестве элементов массива - числа и
строки Если встречается функция - выбрасывать ошибку с текстом "Unexpected value"

Функция принимает: data - массив массивов, содержашие числа или строки

Функция возвращает: Строку в формате CSV

Пример:

arraysToCsv([[1, 2], ['a', 'b']]) // '1,2
a,b'
arraysToCsv([[1, 2], ['a,b', 'c,d']]) // '1,2
"a,b","c,d"' */

function arraysToCsv(data) {
    return data.map(nestedArr => nestedArr.map(item => {
        if (typeof item === "string" || typeof item === "number") {
            if (item.toString().includes(",") || item.toString().includes(";") ||
                item.toString().includes("\"") || item.toString().includes("'" ||
                    item.toString().includes("`"))) {
                return `"${item.replace(/\"/g, '""')}"`;
            } else
                return item;
        } else
            throw new Error("Unexpected value");
    }).join(",")).join("\n");
}





console.log(arraysToCsv([[1, 2], ['a', 'b']]));
console.log(arraysToCsv([[1, 2], ['`a,b`', 'c,d', "jkh"]]));


