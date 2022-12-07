/** DOM
 *
 *  1. DOM(document object model) - объектная модель документа, предоставляющая содержимое страницы в виде иерархического
 *                              дерева объектов, которое можно изменять, изменяя содержание страницы.
 *
 *      * document - переменная-объект, предоставляющая доступ к DOM и с
 *                помощью которой можно изменять содержание страницы.
 *
 *  2. BOM (browser object model) - объектная модель браузера. Это те глобальные переменные, которые предоставляет браузер.
 *
 *      Объекты BOM:
 *      * window - самый главный объект, отвечающий за одно из окон(вкладок) браузера;
 *      * navigator - даёт информацию о браузере, операционной системе, сетевом соединении, местоположении и т.д.;
 *      * location - отвечает за адресную строку браузера;
 *      * history - предоставляет историю переходов пользователя в пределах одного окна;
 *      * screen - предоставляет информацию об кране пользовател;
 *      * document - объектная модель документа.
 *
 */

/** Методы DOM
 * !!! NodeList - не живая коллекция, поэтому при изменении выбранных селекторов DOM-а, не изменяется список узлов
 * !!! HTMLCollection - живая коллекция. Любые манипуляции с ней влияют и на список узлов DOM, изменяя документ.
 */
// 1. querySelector - возвращает первый указанный элемент по css селектору
const div = document.querySelector("div"); //
console.log(div);

// 2. querySelectorAll - возвращает массив(NodeList) всех элементов по css селектору
const titles1 = document.querySelectorAll("h1");

// NodeList - коллекция. Для того, чтобы пройти по ней, есть метод forEach.

// способы преобразования NodeList в массив
console.log(Array.from(titles1));
console.log(Array.prototype.slice.call(titles1));
console.log([...titles1]);

// 3. getElementsByTagName - возвращает массив(HTMLCollection) всех элементов по css селектору
const titles2 = document.getElementsByTagName("h1"); // - HTMLCollection
console.log(titles2);



/** свойства элементов */
// 1. nextSibling / nextElementSibling
console.log(div.nextSibling); // - возвращает следующий текстовый узел, идущий после элемента
console.log(div.nextElementSibling) // - возвращает следующий узел-тег, идущий после элемента

// 2. firstChild / firstElementChild
console.log(div.firstChild); // - возвращает первый дочерний текстовый узел
console.log(div.firstElementChild); // - возвращает первый дочерний узел-тег

// 3. parentElement / parent
console.log(div.parentElement); // - возвращает родительский элемент
console.log(div.parentNode); // - возвращает родительский узел

// 4. closest - возвращает ближайшего родителя по css селектору
console.log(div.closest("body"));

// 5. document.body - возвращает тело документа
// !!! может быть равен null, если скрипт загружается в теге head
console.log(document.body);

// 6. document.links - возвращает коллекцию(HTMLCollection) всех ссылок
console.log(document.links);

// 7. document.forms - возвращает коллекцию(HTMLCollection) всех форм
console.log(document.forms);