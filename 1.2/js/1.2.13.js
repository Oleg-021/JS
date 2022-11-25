/* Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).
1. Функция replaceItemsClear находит все элементы массива arr, равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.
2. Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.

replaceItemsClear([1,2,3,4,2], 2, 'a'); //  [1,'a',3,4,'a']
const arr = [1,2,3,4,2];
replaceItemsMutate(arr, 2, 'a');
console.log(arr); // [1,'a',3,4,'a'] */

function replaceItemsClear(arr, item, replaceItem) {
    let newArr = Array.from(arr);

    for (let i=0; i<newArr.length; i++)
        if (newArr[i] === item)
            newArr[i] = replaceItem;

    return newArr;
}

function replaceItemsMutate(arr, item, replaceItem) {
    for (let i=0; i<arr.length; i++)
        if (arr[i] === item)
            arr[i] = replaceItem;

    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 1, 2 ,1 , 0, 11, 22, 33, 1, 0];
let result1 = replaceItemsClear(arr, 1, "Oleg");
console.table(arr);
console.table(result1);

let result2 = replaceItemsMutate(arr, 0, "Ivan");
console.table(arr);
console.table(result2);

