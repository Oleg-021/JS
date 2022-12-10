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
 *  2. GET - получение данных:
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
 *  3. POST - отправка данных
 *      1) Создать объект XMLHttpRequest;
 *      2) Открыть соединение с сервером с методом POST:   request.open("POST", URL, [async, user, password]);
 *      3) Установить заголовки(headers) для корректной обработки информации сервером;
 *      4) Послать запрос с данными request.send(body);
 *      5) Слушать/обрабатывать события на запрос(request) при помощи addEventListener;
 *      6) Получение ответа с сервера response - как правило возвращается отправленный объект.
 *
 */

const btnResponse = document.querySelector(".btn-response");
const btnRequest = document.querySelector(".btn-request");
const container = document.querySelector("div.container")

function getPosts(callback) {
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
}

function createPost(body, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        callback(response);
    });
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.addEventListener("error", () => {
        console.log("error:");
    });
    xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
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
    return card;
}

btnResponse.addEventListener("click", e => {
    getPosts(response => {
        const fragment = document.createDocumentFragment();

        response.forEach(post => {
            fragment.append(cardTemplate(post));
        });

        container.append(fragment);
    });
});

btnRequest.addEventListener("click", e => {
    const newPost = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    createPost(newPost, (response) => {
       console.log(response);
       const card = cardTemplate(response);
       container.prepend(card);
       //container.insertAdjacentElement("afterbegin", card);
    });
});