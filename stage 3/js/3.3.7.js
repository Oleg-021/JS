/* Напишите функцию, которая принимает массив промисов и возвращает результат того,
который завершился первым. При этом если первый промис выдал ошибку - необходимо вернуть ее.

Пример:

const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

promiseRace([firstPromise, secondPromise, thirdPromise]); // 100 */

function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        });
    }).then(result => result);
}

const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 100)
);

promiseRace([firstPromise, secondPromise, thirdPromise]).then(result => console.log(result));


