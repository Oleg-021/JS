/** РЕКУРСИЯ
 * Рекурсия - это когда функция вызывает саму себя
 */
let value = 0;

const func = () => {
    console.log(value++);

    if (value <= 5)
        func();
};
func();

//вывод элементов массива рекурсией
const arrPrint = (arr) => {
    console.log(arr.shift());

    if (arr.length !== 0)
        arrPrint(arr);
}
arrPrint([5,4,3,2,1,0]);

//суммирование элементов массива к переменной sum
const arrFunc = (arr, sum) => {
    sum += arr.shift();

    if (arr.length !== 0)
        sum = arrFunc(arr, sum);

    return sum;
}
console.log(arrFunc([3,5,10], 100));

// Дан многомерный массив произвольного уровня вложенности,
// нужно добавить восклицательный знак ко всем конечным элементам массива
const arrLogOut = (arr) => {
    for (let i=0; i<arr.length; i++)
        if (Array.isArray(arr[i]))
            arrLogOut(arr[i]);
        else
            arr[i] += "!";

    return arr;
}
console.log(arrLogOut([1, [22,23], [24,25,[236,237,238]]]));

/** НЕЯВНАЯ РЕКУРСИЯ
 * Неявная рекурсия - это когда одна функция вызывает другую, а та в свою очередь вызывает функцию, вызвавшую её
 */

