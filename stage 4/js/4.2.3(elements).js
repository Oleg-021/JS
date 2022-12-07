/** Манипуляция DOM элементами */

const title = document.querySelector("h1");
const div = document.querySelector("div");

/** 1. ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ */
/* 1. innerHtml - свойство, отражающее содержания тега в html формате. При присвоении преобразует текст в html.
*
*       !!! Небезопасно использовать, так как innerHTML удаляет все объекты внутри, заменяя на новые,
*           из-за чего теряются ссылки на объекты. Лучше использовать методы, которые работают с DOM узлами.
* */
title.innerHTML = "<span>Text</span>";

/* 2. textContent - свойство, отражающее содержание тега в текстовом формате. При присвоении нового содержания, текст не преобразуется в html.  */
title.textContent = "<span>New Text</span>";

/* 3. insertAdjacentHTML - вствляет html-текст на одну из четырёх позиций:
                                * beforebegin - перед элементом
                                * afterBegin - на первую дочернюю позицию
                                * beforeend - на последнюю дочернюю позицию
                                * afterend - после элемента
*/
title.insertAdjacentHTML("beforebegin", "<h2>Tittle H2</h2>");
title.insertAdjacentHTML("afterbegin", "<span>AfterBegin</span>");
title.insertAdjacentHTML("beforeend", "<a>end</a>");
title.insertAdjacentHTML("afterend", "<h3>Tittle H3</h3>");

/* 4. createElement - создаёт элемент с определённым тегом */
const span = document.createElement("span");
span.textContent = "span, created by createElement method";
span.classList.add("myClassSpan");

/* 5. appendChild - добавляет дочерний элемент в цонец */
title.appendChild(span);
div.appendChild(span); // - элемент добавится только в div

/* 6. createDocumentFragment - создаёт фрагмент, для добавления на html страницу

        !!! Фрагменты используют для того, чтобы добавлять все элементы сразу, а не по отдельности,
            сперва добавляя элементы во фрагмент, а затем весь фрагмент на html страницу. */
const fragment = document.createDocumentFragment();
const colors = ["black", "green", "blue"];
colors.forEach(color => {
    const item = document.createElement("div");
    item.classList.add(`bg-${color}`);
    item.textContent = color;
    item.style.background = color;
    item.style.color = "white";
    fragment.appendChild(item);
});
document.body.appendChild(fragment);

/** УДАЛЕНИЕ ЭЛЕМЕНТОВ */
/* 1. remove - удаляет элемент со страницы */
title.remove();

/* 2. parentElement.removeChild - удаляет элемент через обращение к родителю */
title.parentElement.removeChild(div);









/* 6. insertAdjacentElement - добавляет элемент в одну из четырёх позиций:
                                 * beforebegin - перед элементом
                                 * afterBegin - на первую дочернюю позицию
                                 * beforeend - на последнюю дочернюю позицию
                                 * afterend - после элемента
 *
const a1 = document.createElement("a").textContent = "Ссылка перед элементом",
    a2 = document.createElement("a").textContent = "Первая дочерняя ссылка",
    a3 = document.createElement("a").textContent = "Последняя дочерняя ссылка",
    a4 = document.createElement("a").textContent = "Ссылка после элемента";

title.insertAdjacentElement("beforebegin", a1);
title.insertAdjacentElement("afterbegin", a2);
title.insertAdjacentElement("beforeend", a3);
title.insertAdjacentElement("afterend", a4);




/*title.innerHTML = ""; // - очищаем title
/*    4) insertAdjacentElement - вставляет Node элемент DOMа


title.insertAdjacentElement("beforebegin", "<h2>Tittle H2</h2>");
title.insertAdjacentElement("afterbegin", "<span>AfterBegin</span>");
title.insertAdjacentElement("beforeend", "<a>end</a>");
title.insertAdjacentElement("afterend", "<h3>Tittle H3</h3>");


//title.appendChild() =
*/
