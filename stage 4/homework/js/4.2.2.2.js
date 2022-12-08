/* Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
*/

const linksArr = document.querySelectorAll("li > a");

for (let link of linksArr)
    if (link.getAttribute("href").includes("://"))
        link.style.color = "orange";
