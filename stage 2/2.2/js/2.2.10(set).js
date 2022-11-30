/** SET (множество)
 * set - структура данных, хранящая уникальные значения
 * в множестве(set) элементы располагаются в том порядке, в котором они были добавлены */

// 1. Создание (конструктор) - пременная_множество = new Set([перебираемый_объект])
const set = new Set(["button", "active", "small"]); // - массив-аргумент
const set2 = new Set("button active small"); // - строка-аргумент (добавляет строку посимвольно отдельными символами)
const set3 = new Set(set); // - множество-аргумент (клонирует set в set3)

// 2. Добавление элементов (add) - множество.add(значение) - возвращает то же множество
const headerRef = {className: "Header"};
set.add("input")
    .add("table")
    .add({className: "Button"})
    .add(headerRef);

// 3. Проверка на наличие значения (has) - множество.has(значение)
console.log(set.has("button")); // - true
console.log(set.has("h1")); // - false
console.log(set.has({className: "Button"})); // - false, так как объекты имеют разные ссылки
console.log(set.has(headerRef)); // - true

// 4. Удаление элементов (delete) - множество.delete(значение) - возвращает true/false, в зависимости от того, удалил ли элемент
set.delete("active");
set.delete(headerRef);

// 5. Очищение сножества (clear) - множество.clear()
set.clear();

// 6. Получение значений множества (values) - множество.values()
set.add("input")
    .add("table")
    .add("active")
    .add("small")
    .add("input")
    .add("table");

console.log(set.values()); // - результат (Set Iterator)
console.log(...set.values()); // - развёртывает в строку

// 7. Получение значений множества (keys) - множество.keys() - работает также как и values
console.log(...set.keys());

// 8. Получение массива массивов множества (entries) - множество.entries()
console.log(...set.entries()); // ключ и значения идентичны

// 9. Развёртывание set - аналог методов values и keys
console.log(...set);

// 10. Размер множества (size) - множество.size
console.log(set.size);

// 11. Получение массива из множества
console.log([...set]); // - получение массива из множества
console.log(Array.from(set));

// 12. Перебор множества (for...of)
for (let item of set)
    console.log(item);

// 13. Перебор множества (forEach) - множество.forEach(колбек_функция(значение, ключ, множество))
set.forEach((value, key, set) => {
    console.log(value);
})

console.log(set);

