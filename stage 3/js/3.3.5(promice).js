/** ПРОМИСЫ
 *  1. Создание - new Promise(функция(resolve, reject) {
 *                      тело_функции
 *                      resolve(параметры)/reject(параметры);
 *                  });
 *          1) resolve(параметры_передаваемые_в_then) - вызывается тогда, когда закончена асинхронная операция  и она закончена успешно
 *          2) reject(параметры_передаваемые_в_catch) - вызывается тогда, когда асинхронная операция отработала некорректно
 *          !!! resolve и reject принимают по одному аргументу или не одного, остальные игнорируются
 *
 *  2. then(функция(resolve_параметры) { - отрабатывает после основного участка (принимает 2 параметра функцию успешного выполнения промиса и функцию обработки ошибок)
 *          тело функции;
 *      }, функция(resolve_параметры) {
 *          тело функции обрабатывающей ошибку;
 *      });
 *
 *      !!! Если мы хотели бы только обработать ошибку, то можно использовать null
 *          в качестве первого аргумента: .then(null, errorHandlingFunction).
 *          Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает то же самое
 *
 *  3. catch(функция(reject_параметры) { - отлавливает ошибки, если таковые были
 *      тело функции;
 *      });
 *
 *  4. finally(функция()) - отрбатывает в любом случае (функция колбек не имеет параметров)
 *
 *     !!! Идея finally состоит в том, чтобы настроить обработчик
 *         для выполнения очистки/доведения после завершения предыдущих операций.
 *
 *  5. Promise.all([массив_промисов]) - возвращает новый Promise-объект, после отработки всех функций в массиве промисов
 *
 *  6. Promise.race([массив_промисов]) - в отличие от Promise.all отрабатывает сразу, как только сработает первый промис из массива промисов
 */


const sleep = function (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

sleep(2000).then(function () {
    console.log("After 2 seconds");
});

Promise.all([sleep(2000), sleep(3000)])
    .then(() => console.log("allPromises"));

Promise.race([sleep(2000), sleep(3000)])
    .then(() => console.log("racePromises"));













console.log("Request data...");

// 1. resolve(параметры_передаваемые_в_then) - вызывается тогда, когда закончена асинхронная операция  и она закончена успешно
// 2.
const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Preparing data...");
        const backEndData = {
            server: "aws",
            port: 2000,
            status: "working"
        };

        resolve(backEndData);
    }, 2000);
});


// then сработает после того, как отработает resolve
p.then(function (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    });
    /*const p2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    });

    p2.then(function (clientData) {
        console.log("Data received", data);
    });*/
}).then(clientData => {
    console.log(clientData);
    clientData.fromPromise = true;

    return clientData;
}).then(data => console.log(data))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Finally"));





/*setTimeout(() => {
   console.log("Preparing data...");

   const backEndData = {
       server: "aws",
       port: 2000,
       status: "working"
   };

   setTimeout(() => {
       backEndData.modified = true;
       console.log("Data received:", backEndData);
   }, 2000);
}, 2000);*/

