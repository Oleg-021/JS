/* Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов вызова этих промисов.

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

promiseAll([firstPromise, secondPromise, thirdPromise])
    .then(console.log); // [300, 200, 100] */

function promiseAll(promises) {
    const resultArr = [];

    if (promises.length === 0)
        return new Promise(resolve => resolve(resultArr));

    let countOfAddedElement = 0;
    return new Promise(resolve => {
        promises.forEach((promise, index) => {
            promise.then(result => {
                resultArr[index] = result;
                countOfAddedElement++;

                if (countOfAddedElement === promises.length)
                    resolve(resultArr);
            });
        });
    });
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





promiseAll([firstPromise, secondPromise, thirdPromise]).then(result => console.log(result));