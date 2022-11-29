/** МЕТОДЫ ОБЪЕКТОВ
 *
 */

// 1. Копирование объекта (поверхностное/глубокое)
let obj1 = {
    name: "Ivan",
    lastName: "Ivanov",
    car: {
        mark: "BMW",
        model: "540i",
    }
};
let obj2 =  {
    age: 20,
};
let obj3 = {
    address: "Moscow",
}
let obj4 = {
    post: 222133,
};

let newObj = obj1; // newObj ссылается на объект obj1

/* 1) Object.assign (поверхностное копирование)
Object.assign(конечный_возвращаемый_объект, копируемые_объекты) - возвращает объект, в который скопировали другой объект
Object.assign - является поверхностным клонированием, так как внутренние объекты клонируемого объекта не клонируются,
а новые поля будут просто ссылаться на них
 */
newObj = Object.assign({}, obj1); // - копирует obj1 в пустой объект
newObj.name = "Alexander";
newObj = Object.assign(newObj, obj2); // - копирует obj2 в newObj, создавая поле age
newObj = Object.assign(newObj, obj3, obj4); // - копирует obj3, obj4 в newObj
newObj = Object.assign(newObj, obj1); // - копирует obj1, заменяя значения полей на свои
let linkNewObj = Object.assign(newObj); // - linkNewObj будет ссылать на newObj
linkNewObj.name = "Alexander";

console.log(obj1);
console.log(newObj);
console.log(newObj.car === obj1.car); // true

/* 2) (глубокое копирование)
объект_клон = JSON.parse(JSON.stringify(клонируемый_объект)); */
let objJson = JSON.stringify(newObj); // - JSON.stringify превращает obj1 в текстовый JSON формат
newObj = JSON.parse(objJson); // - JSON.parse преобразует текстовый формат JSON в объект и присваивает переменной
console.log(JSON.stringify(newObj.car === obj1.car)); // false


/* 2. Object.keys
Object.keys(объект) - возвращает массив ключей полей объекта */
let newObjKeys = Object.keys(newObj);
console.log(newObjKeys)


/* 3. Object.values
Object.values(объект) - возвращает массив значений полей объекта */
let newObjValues = Object.values(newObj);
console.log(newObjValues);


/* 4. Object.entries
Object.entries(объект) - возвращает массив массиво(Map), в каждом из подмасивов элементы которого [поле, значение]*/
let newObjEntries = Object.entries(newObj);
console.log(newObjEntries);


/* 5. Object.fromEntries
Object.fromEntries(объект) - преобразует Map обратно в объект */
let objFromEntries = Object.fromEntries(newObjEntries);
objFromEntries.car.mark = "Audi";
objFromEntries.car.model = "RS7";
objFromEntries.name = "Oleg";
console.log(objFromEntries); // ссылка на car какого-то хрена остаётся (поверхностно копирует)
console.log(newObj); //

