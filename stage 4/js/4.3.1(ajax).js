/** AJAX
 *  Ajax - технология, позволяющая общаться с сервером и изменять страницу без её перезагрузки.
 *
 *  1. XMLHttpRequest - встроенный в браузер объект, дающий возможность отправлять запросы
 *                      к серверу без перезагрузки страницы.
 *
 *     !!! На сегодня не обхательно использовать XMLHttpRequest, так как существует более соовременный метод fetch.
 *     Использование XMLHttpRequest обусловлена:
 *          * большим объемом кода, написанным с его использованием;
 *          * необходимо поддерживать старые браузеры;
 *          * потребность в большей функциональности, которую не может предоставить fetch.
 *
 *     !!! XMLHttpRequest имеет 2 режима работы: асинхронный и синхронный.
 *
 *     !!! Чтобы сделать запрос, трбуется 3 шага:
 *     1) Создать объект XMLHttpRequest:    const/let/var request = new XMLHttpRequest(); - конструктор без аргументов
 *     2) Открыть соединение с сервером, инициализируя запрос с параметрами:    request.open(method, URL, [async, user, password]);
 *        * method - типо запроса. (обычно POST/GET);
 *        * URL - адрес, куда отправлять запрос;
 *        * async - усли указать false, тогда запрос будет обрабатывать синхронно. Другими словами выполнение JavaScript остановится
 *                  на send() и возобновится только после получения ответа;
 *        * user, password - логин и пароль для базовой HTTP-авторизации(если требуется).
 *     3) Послать запрос:    request.send([body]);
 *        * body - необязательный параметр. Используется для отправки данных при помощи POST.
 *
 *        !!! request.timeout(ms) - указывает на промежуток времени, в течение которого мы готовы ждать ответ, если запрос
 *            не успевает выполнится, то он прерывается и происходит событие "timeout".
 *     4) Слушать/обрабатывать события на запрос(request), чтобы получить ответ:
 *        * load - происходит, когда получен какой-либо ответ, включая ответы с HTTP-ошибкой, например 404;
 *        * error - когда запрос не может быть выполнен, например, нет соединения или невалидный URL;
 *        * progress - происходит периодически во время загрузки ответа, сообщает о прогрессе.
 *
 *        !!! Обработчики событий можно вешать при помощи addEventListener("load/error/progress", callback) или при помощи функций:
 *            * request.onload = callback; - addEventListener(load)
 *            * request.onerror = callback; - addEventListener(error)
 *            * request.onprogress = callback; - addEventListener(progress)
 *     5) После ответа сервера, результат запроса можно получить в следующих свойствах объекта request
 *        * status(число) - код состояния HTTP-ответа: 200, 404, 403 и т.д., 0 - если ошибка не связана с HTTP;
 *        * statusText(текс) - сообщение состояния HTTP-ответа: OK (200), Not Found (404), Forbidden (403) и т.д.;
 *        * response - тело ответа сервера. В старых версиях может встречаться как responseText.
 *     6) Отмена запроса: request.abort()
 *
 *
 *
 *
 *
 *   запросы работают асинхронно
 */

const btn = document.querySelector("button.btn_response");

const getPosts = async function (callback) {
    const xhr = new XMLHttpRequest(); // - создание экземпляра
    // 1. открываем запрос
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // - открывает соединение с сервером, формируя запрос
    // 2. подписываемся на событие загрузки(load)
    xhr.addEventListener("load", () => { // - обрабатывает событие загрузки(load)
        console.log("request loaded");
        //console.log(xhr.response); // - хранит информацию, прешедшую от сервера

        const response = JSON.parse(xhr.responseText);
        callback(response);
    });
    // 3. обрабатываем событие ошибки
    xhr.addEventListener("error", () => {
        console.log("error:");
    });
    // 4. отправляем запрос
    xhr.send(); // - отправляет запрос
};

btn.addEventListener("click", e => {
    getPosts(response => {
        const container = document.querySelector("div.container")
        const fragment = document.createDocumentFragment();

        response.forEach(post => {
            const card = document.createElement("div");
            card.classList.add("card");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = post.title;
            const article = document.createElement("p");
            article.classList.add("card-text");
            article.textContent = post.body;
            cardBody.append(title);
            cardBody.append(article);
            card.append(cardBody);
            fragment.append(card);
        });

        container.append(fragment);
    });
});









/*getPosts(response => {
    const divResponse = document.createElement("div");
    divResponse.classList.add("response");

    for (let item of response) {
        const ul = document.createElement("ul");

        for (let key in item) {
            const li = document.createElement("li");
            li.textContent = ": " + item[key];
            const b = document.createElement("b");
            b.textContent = key;
            li.prepend(b);
            ul.append(li);
        }

    }
});*/
