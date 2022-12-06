/** ASYNC / AWAIT
 *  1. async - префикс, используемый для обозначения асинхронной функции
 *
 *     Синтаксис: async function(параметры) {
 *         тело_функции;
 *     }
 *
 *     !!! async-функция всегда возвращает объект типа Promise
 *
 *
 *  2. await - префикс, используемый для обозначения выполнения асинхронной функции как синхронной
 *             внутри async-функции. await заставляет интерпретатор JavaScript ждать до тех пор, пока
 *             промис справа от await не выполнится, после чего оно вернёт его результат и выполнение кода продолжится.
 *
 *     !!! await применяется только к Promise-функциям
 *     !!! await нельзя использовать в простых функциях
 *
 */

const delay = function (ms) {
    return new Promise(resolve => {
        setTimeout(() => {resolve()}, ms);
    });
};

const url = "https://jsonplaceholder.typicode.com/todos";


// fetch - аналог ajax, делающий асинхронный запрос и возвращающий promise
const fetchTodos = function () {
    console.log("Fetch todo started...")
    return delay(2000)
            .then(() => fetch(url))
            .then(response => response.json());
};

//fetchTodos()
  //  .then(data => console.log(data))
    //.catch(err => console.error(err));

async function fetchAsyncTodos() {
    console.log("Fetch todo started...")
    try {
        let r = 0;
        await delay(2000);
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

fetchAsyncTodos().then(result => console.log(0));

