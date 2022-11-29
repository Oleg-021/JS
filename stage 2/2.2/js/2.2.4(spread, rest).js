const citiesRussia = ["Moscow", "Saint-Petersburg", "Donetsk", "Smolensk", "Sochi", "Novosibirsk"];
const citiesEurope = ["Prague", "Berlin", "London", "Paris", "Rome"];

const citiesRussiaWithPopulation = {
    Moscow: 20000000,
    Saint_Petersburg: 7000000,
    Donetsk: 1000000,
    Smolensk: 390000,
    Sochi: 400000,
    Novosibirsk: 1500000,
};

const citiesEuropeWithPopulation = {
    Moscow: 10000000,
    Prague: 2000000,
    Berlin: 5000000,
    London: 7000000,
    Paris: 5000000,
    Rome: 3500000,
};

/** SPREAD */
/* 1. МАССИВЫ
Синтаксис: ...разворачиваемый_массив - разворачивает массив в строку */
console.log(citiesRussia);
console.log(...citiesRussia);

const allCities1 = [...citiesRussia].concat([...citiesEurope]);
const allCities2 = [...citiesRussia, "Washington", ...citiesEurope];
console.log(allCities2);

console.log(Math.max(...[2, 66, 99, 33])); // - оператором spread можно разворачивать массив для сравнения
console.log(Math.max.apply((null, [2, 66, 99, 33]))); // - так делали раньше

//const divs = document.querySelector("div"); // - коллекция элементов div
//const nodes = [...divs]; // - коллекция элементов divs преобразуется в массив

/* 2. ОБЪЕКТЫ
Синтаксис: ...копируемый_объект - создаёт копию объекта*/
const newCitiesRussiaWithPopulation = {...citiesRussiaWithPopulation}; // создаёт копию объекта
newCitiesRussiaWithPopulation.Moscow = 19000000;
console.log(citiesRussiaWithPopulation);
console.log(newCitiesRussiaWithPopulation);
const allCitiesWithPopulation = {...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation}; // складывает объекты
console.log(allCitiesWithPopulation);

/** REST */
/* 1. ПАРАМЕТРЫ ФУНКЦИИ
Синтаксис: ...массив_входный_параметров_функции */
function sum(a, b, ...rest) { // rest
    console.log(rest); // [9, 23, 66, 176]
    return a + b + rest.reduce((acc, element) => acc + element, 0);
}
const numbers = [1, 7, 9, 23, 66, 176];
console.log(sum(...numbers)); // оператор spread

// 2. МАССИВЫ
let a = numbers[0],
    b = numbers[1],
    c = numbers[2],
    restOther;
console.log(a, b, c);

[a, b, c, ...restOther] = numbers; // аналог записи выше присвоенных переменных (деструктуризация)
console.log(a, b, c);
console.log(restOther); // [23, 66, 176]

// 3. ОБЪЕКТЫ
const person = {
    name: "Max",
    lastName: "Klimenko",
    age: 20,
    address: "Minsk",
};
const {name, age, ...restObjectOtherParam} = person; // restObjectOtherParam = { lastName: 'Klimenko', address: 'Minsk' }
console.log(name, age, restObjectOtherParam);


