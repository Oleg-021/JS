/** ДЕСТРУКТУРИЗАЦИЯ */
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b,
    ];
}

// 1.МАССИВ
// Синтаксис: [переменные_с_присваевыми_значениями_массив] = деструктуризируемый_массив
const result = calcValues(42, 12);
const sum = result[0];
const sub = result[1];
const mult = result[2];
const del = result[3];

//Деструктуризация
let [sumDest, subDest, multDest, delDest] = calcValues(42,12); // 5 строчек кода можно представить в одну

// Можно получать ограниченное число первых элементов массива
[sumDest, subDest, multDest] = calcValues(10, 2); // получаем первые 3 значения массива от выполненной функции

// Чтобы пропустить элемент, просто перечилсяем его через запятую
[sumDest, , , delDest] = calcValues(32, 2); // получаем первое и последнее значение
console.log(sumDest, subDest, multDest, delDest); // - 34, 8, 20, 16

// Можно перечислить определённое количество переменных, остальную часть массива же при помощи оператора spread занести в массив
let others;
[sumDest, subDest, multDest, ...others] = calcValues(33, 3); // 36 30 99 [11]

// Значение по умолчанию, если значения не определены (undefiend)
[sumDest = 0, subDest = 'Вычитания нет'] = calcValues(7, 3);

// 2. ОБЪЕКТ
const person = {
    name: "Pavel",
    lastName : "Rurik",
    age: 22,
    address : {
        city: "Moscow",
        country: "Russia"
    }
};

// Деструктуризация
let {name, age, car} = person; // - name = person.name, age = person.age, car = person.car
console.log(name, age, car); // Pavel 22 undefiend

// Значение по умолчанию
let {motorcicle = "мотоцикла нет"} = person;
console.log(motorcicle); // мотоцикла нет

// Помещение поля в другую переменную ??????? - не сработало
let {lastName: surname = "Borisov"} = person;
console.log(surname);

let {name: firstName = "Нет имени", lastName: surName = "Нет фамилии", age: year = "Не известен возраст"} = person;
console.log(firstName, surName, year);

// Вложенные объекты
const {name: onlyName, ...info} = person;
console.log(onlyName, info);