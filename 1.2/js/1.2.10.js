/* Напишите функцию findAllIdx(arr, value), которая возвращает
массив индексов элементов, у которые значение равно value.

findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
findAllIdx([1,1], 0) // [] */

/*function findAllIdx(arr, value) { // поиск по тексту
    let indexArr = [];
    let findPosition = 0;

    while (str.indexOf(value, findPosition) && findPosition < arr.length) {
        indexArr.push(str.indexOf(value, findPosition));
        findPosition = str.indexOf(value, findPosition) + 1;
    }

    return indexArr;
}*/

function findAllIdx(arr, value) {
    let result = [];

    for (let i=0; i<arr.length; i++)
        if (arr[i] === value)
            result.push(i);

    return result;
}

//let str = "My name is Oleg, and I'm from Belarus - the centre of World!";
let arr = [1,2,3,0,12,21,0,0]

console.log(findAllIdx(arr, 0));
