/** MAP */

// 1. Создание (конструктор) - var/let/const переменная_карта = new Map(массив_массивов_аргументов);
const map = new Map([
    ["name1", "Oleg"],
    ["name2", "Ivan"],
    ["name3", "Stepan"],
    ["name4", "Pavel"],
    ["name5", "Alexander"],
    [45, "Number"],
    [true, "Правильно"],
    [false, "Неправильно"],
    [{field: "empty field"}, "Объект"],
    [function () {return true}, "Правильная функция"]
]);
console.log(map);

// 2. Добавление значений (set) - объект_карта.set(ключ, значение)
map.set("setKey", "setValue");
console.log(map);

// 3. Получение значений (get) - объект_карта.get(ключ)
console.log(map.get("name2"));

// 4. Проверка наличия значения по ключу (has) - объект_карта.has(ключ)
console.log(map.has("name4"));
console.log(map.has("name7"));

// 5. Удаление значения (delete) - объект_карта.delete(ключ)
map.delete("name1");
console.log(map);

// 6. Удаление всех значений (clear) - объект_карта.clear()
map.clear();

// 7. Просмотр длинны карты () - объект_карта.size
console.log(map.size);


map.set("HTML", "HyperText Markup Language")
    .set("CSS", "Cascading Style Sheets")
    .set("JS", "Java Script");

// 8. Получение ключей (keys) - объект_карта.keys()
console.log(map.keys()); // - результатом получается не массив, а объект перебора (Map Iterator)
console.log(...map.keys()); // - можно перевести в текстовый формат, используя оператор spread
console.log([...map.keys()]); // - преобразование в массив

// 9. Получение значений (values) - объект_карта.values()
console.log(map.values()); // - результат (Map Iterator)
console.log([...map.values()]); // - готовый массив

// 10. Получение массива массивов карты (entries) - объект_карта.entries()
console.log(map.entries()); // - возвращает массив массивов (Map Entries)
console.log(...map.entries()); // - возвращение массива

const map2 = new Map(map.entries()); // - клонирование карты
console.log(map2);

// 11. Деструктуризация
const [[key, value], second, third] = map;
console.log(key, value, second, third);

// 12. Перебор карты (for...of)
for (let entry of map)
    console.log(entry);

for (let [key, value] of map)
    console.log(key, value);

// 13. Перебор карты (forEach) - объект_карта.forEach(колбек_функция(значение, ключ, объект_карта))
map.forEach((value, key, map) => {
   console.log(`key: ${key} - value: ${value}`);
});

