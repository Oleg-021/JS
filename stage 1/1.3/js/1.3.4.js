/* Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или
объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

getStringCount
({
  first: 'stage 1',
  second: 'stage 2',
  third: false,
  fourth: ['anytime', stage 2, 3, 4 ],
  fifth:  null,
}); // 3

getStringCount
(['stage 1', 'stage 2', ['3']]) // 3
P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount */

/*function getStringCount(object) {
    let stringCount = 0;

    if (typeof object === "object")
        if (Array.isArray(object))  // массив
            for (let i=0; i<object.length; i++)
                stringCount += getStringCount(object[i]);
        else // объект
            for (let key in object)
                stringCount += getStringCount(object[key]);
    else
        stringCount += typeof object === "string";

    return stringCount;
}*/
function getStringCount(object) {
    let stringCount = 0;

    for (let key in object)
        if (typeof object[key] === "object")
            stringCount += getStringCount(object[key]);
        else if (typeof object[key] === "string")
            stringCount++;

    return stringCount;
}



const obj = {
    first: 'stage 1',
    second: 'stage 2',
    third: false,
    fourth: ['anytime', 2, 3, 4 ],
    fifth:  null,
    age: "32",
};
const arr = ['stage 1', 'stage 2', ['3', 33], 11, 12, [1, 3,'12', ['33']]];

console.log(getStringCount(obj));
console.log(getStringCount(arr));
