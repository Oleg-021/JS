/** FETCH
 *
 *     !!! По умолчанию fetch делает GET запрос, возвращая Promise с объектом ответа: fetch(адрес);
 *     !!! Если отправляется не GET запрос, то нужно дополнительно передать объект с дополнительными настройками: fetch(адрес, объект_настройки);
 *
 *
 * fetch(адрес_запроса, объект_настройки) - Promise с ответом с сервера
 * */

/** 1. GET */
const url = "https://jsonplaceholder.typicode.com/posts/";

function getPost1(url, id) {
    return new Promise((resolve, reject) => {
        fetch(url + id).then(response => {
            return response.json();
        }).then(post => {
            resolve(post);
        }).catch(err => {
           reject(err);
        });
    });
}

function getPost2(url, id) {
    return fetch(url + userId).then(response => {
        return response.json();
    });
}

function getPost3(url, id) {
    return Promise.resolve().then(() => {
        const [userType, userId] = id.split("-");
        return fetch(url + id).then(response => {
            return response.json();
        });
    });
}

getPost1(url, 23).then(post => {
    console.log(post);
});

getPost2(url, "user-1").then(post => {
    console.log(post);
}).catch(err => {
    console.log(err);
});

fetch(url).then(response => {
        return response.json(); // - возвращает Promise объект с ответом с сервера, преобразованного из json в массив
    }).then(jsonResponse => {
        console.log(jsonResponse);
    }).catch(err => {
        console.log(err);
    });

