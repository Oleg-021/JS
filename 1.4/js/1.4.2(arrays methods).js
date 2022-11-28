/**ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА*/
const users = [
    {name: "Oleg", lastName: "Sementsov", gender: "male", age: 20, balance: 533},
    {name: "John", lastName: "Sert", gender: "male", age: 23, balance: 266},
    {name: "Arthur", lastName: "Karpov", gender: "male", age: 12, balance: 233},
    {name: "Alexander", lastName: "Glebov", gender: "female", age: 11, balance: 2333},
    {name: "Nazar", lastName: "Tovarischin", gender: "male", age: 29, balance: 23},
    {name: "Evheniy", lastName: "Gubarev", gender: "male", age: 23, balance: 4443},
    {name: "Ivan", lastName: "Ivanov", gender: "male", age: 10, balance: 10},
];

/* 1. foreach
[массив].foreach(колбэк_функция) - проходит по массиву циклом применяя на него колбекфункцию (изменяя его)
колбек функция на входе может иметь 3 параметра: (элемент, индекс_элемента, сам_массив) */
users.forEach((user, i, arr) => {
    console.log(user, i);
});


/* 2. filter
[массив].filter(колбек_функция) - возвращает новый массив, основываясь на результате функции колбек (если true, то войдёт в новый массив)
колбек функция на входе может иметь 3 параметра: (элемент, индекс_элемента, сам_массив) */
let resultFilter = users.filter(user => user.age < 20);
console.log(resultFilter);


/* 3. map
[массив].map(колбек_функция) - возвращает новый массив, состоящий из элементов, которые возвращает колбек функция
колбек функция на входе может иметь 3 параметра: (элемент, индекс_элемента, сам_массив) */
const resultMapNames = users.map((user => user.name));
const resultMapNamesAndAges = users.map((user => ({name: user.name, age: user.age})));
const resultMapNamesAndAgesAndGender = users.map((user => {return {name: user.name, gender: user.gender, age: user.age}}));
console.log(resultMapNames);
console.log(resultMapNamesAndAges);
console.log(resultMapNamesAndAgesAndGender)


/* 4. reduce
[массив].reduce(колбек_функция, стартовое_значение(ноль по умолчанию)) -
колбекфункция принимает 4 параметра: (стартовое_значение_передающееся_на_каждой_итерации, элемент, индекс_элемента, сам_массив)
возвращает изменённое стартовое значение */
let resultReduceBalance = users.reduce((acc, user) => {
    return acc + user.balance;
}, 0);
let resultReduceTotalAges = users.reduce((totalAges, user) => (totalAges += user.age), 0);
console.log(resultReduceBalance);
console.log(resultReduceTotalAges);


/* 5. some/every
some - возвращает ture, если хотя бы один элемент массива после вызова колбек функции вернёт true
every - возвращет true, если каждый элемент массива удовлетворяет требованиям колбек функции
колбек функция на входе может иметь 3 параметра: (элемент, индекс_элемента, сам_массив) */
console.log(users.some(user => user.gender === "male"));
console.log(users.every(user => user.gender === "male"));


/* 6. sort
[массив].sort(колбэк_функция()) - сортирует массив по колбек функции, меняя исходный,
если условие false(<0), то преставляет эелементы
колбэк функция принимает 2 параметра (следующее_значение, текущее_значение)

Функция должна для пары значений возвращать:
function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

*/
const arr = [7,1,2,30,4,19,5];
const names = ["Miroslav" ,"Anna", "Stepan", "Grigoriy", "Pavel"];
names.sort(); // по умолчанию сортирует эелемнты массива как строки
//console.log(names);
arr.sort((next, current) => {
    return next - current;
});
console.log(arr);
users.sort((nextUser, currentUser) => {
    console.log(currentUser.age - nextUser.age);
    return currentUser.age - nextUser.age;
});
console.log(users);


/* 7. find
[массив].map(колбек_функция) - находит первый попавшийся элемент, который удовлетворяет условию колбек функции
колбек функция на входе может иметь 3 параметра: (элемент, индекс_элемента, сам_массив) */
const oldUsers = users.find(user => user.age > 20);
//console.log(oldUsers);