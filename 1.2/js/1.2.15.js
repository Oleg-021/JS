/* Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.
Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.
Функция должна возвращать новый массив, а не мутировать старый.

Примеры:
console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]
console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]
console.log(
  moveToStart([1, 2, 3, 4, 5], 10)
); // [1, 2, 3, 4, 5] */

const moveToStart = (arr, n) => {
    let resultArr = arr.slice(); // создаём копию массива

    if (resultArr.length <= n)
        return resultArr;
    else {
        let startIndex = resultArr.length - n;
        let cutPart = resultArr.splice(startIndex);

        resultArr = cutPart.concat(resultArr);

        return resultArr;
    }
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(arr);
//console.log(value);


console.log(moveToStart(arr, 3));
console.log(moveToStart(arr, 10));
console.log(moveToStart(arr, 12));