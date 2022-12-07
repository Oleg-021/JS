/** 1. Работа с классами
 *    1) classList - содержит список классов выбранного элемента.
 *      * add(имя_класса) - добавляет класс в элемент;
 *      * remove(имя_класса) - удаляет класс у элемента;
 *      * contains(имя_класса) - проверяет на содержание класса у элемента;
 *      * toggle(имя_класса) - включает/выключает класс у элемента, возвращая true при "включении"/добавлении класса в элемент
 *                          и false при "выключении"/удалении класса из элемента;
 *
 *    2) className - содержит наименования классов элемента в строке, разделяя названия пробелом
 *    3) dataset - содержит набор пользовательских атрибутов элемента, начинающихся с префикса «data-»
 *    4) attributes - содержит набо всех атрибутов элемента
 *
 *
 * 2. Работа с атрибутами
 *    1) setAttribute - устанавливает атрибут со значением
 *       Синтаксис: элемент.setAttribute(имя_атрибута, значение_атрибута);
 *
 *    2) getAttribute - возвращает значение атрибута
 *       Синтаксис: элемент.getAttribute(имя_атрибута);
 *
 *    3) hasAttribute - проверяет атрибут на наличие
 *       Синтаксис: элемент.hasAttribute(имя_атрибута);
 *
 *    4) removeAttribute - удаляет атрибут
 *       Синтаксис: элемент.removeAttribute(имя_атрибута);
 *
 *    !!! Можно использовать собственные атрибуты для хранения какой-либо информации, в качестве флагов и т.д.
 */

const div = document.querySelector("div");
const divLink = div.querySelector(".link");

console.log(divLink);
console.log(divLink.parentElement);
console.log(divLink.closest(".content")); // возвращает ближайшего родителя по селктору

// 1. classList
console.log(div.classList);
div.classList.add("article", "custom");
div.classList.remove("article");
div.classList.contains("custom");
div.classList.toggle("toggle");
console.log(div.classList);

// 2. className
console.log(div.className);

// 3. href
console.log("Содержание ссылки: " + divLink.href);

// .
div.setAttribute("id", "myId");
div.id = "myId2";
div.hasAttribute("id");

