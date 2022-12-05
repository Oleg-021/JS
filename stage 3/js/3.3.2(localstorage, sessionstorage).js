/** ВЕБ-ХРАНИЛИЩА (localStorage, sessionStorage)
 *  Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение(строки) в браузере.
 *
 *  1. localStorage - данные сохраняются после обновления страницы и даже после перезапуска браузера.
 *  2. sessionStorage - данные сохраняются после обновления страницы.
 *
 *  3. Зачем они нужны?
 *      1) Данные не отправляются на сервер при каждом запросе. Это позволяет хранить гораздо больше данных.
 *      2) Сервер не может управлять объектами хранилища через HTTP-заголовки. Всё делается при помощи JavaScript
 *      3) Хранилище привязано к источнику(домен/порт/протокол). Это значит, что разные протоколы или поддомены
 *         определяют разные объекты хранилища, и они не могут получить доступ к данным друг друга.
 *
 *  4. Основные методы и свойства:
 *      1) setItem(ключ, значение) - сохранить пару ключ/значение;
 *      2) getItem(ключ) - получить данные по ключу;
 *      3) removeItem(ключ) - удалить значение по ключу;
 *      4) clear() - удалить все значения из хранилища;
 *      5) key(индекс) - получить ключ по заданному индексу;
 *      6) length - количество элементов в хранилище;
 */

const obj = {
    name: "Oleg",
    age: 23
}
let num = 10,
    str = "Hello",
    bool = true;

localStorage.setItem("obj", obj);
localStorage.setItem("number", num);
localStorage.setItem("str", str);
localStorage.setItem("bool", bool);

console.log(localStorage);
console.log(localStorage.getItem("obj")); // доступ через getItem
console.log(localStorage.number); // доступ через точку и имя поля
