/** TRY..CATCH..FINALLY
 * нужна для отлова ошибок и их обработки
 * 1. Конструктор try/catch/finally: try {
 *                      выполняемый_код;
 *                  catch (error) {
 *                      выполняемый_код_в_случае_ошибки;
 *                  } finally {
 *                      код_выполняемый_всегде_независимо_от_была_ошибка_или_нет;
 *                  }
 *
 *    finally - не обязательный блок
 *
 * 2. Свойства объекта error:
 *      * name - содержит название ошибки(имя класса из которого был создан объект ошибки);
 *      * message - содержит текст ошибки;
 *      * stack - стек вызова до возникновения ошибки (нестандартное свойство);
 *
 * 3. Генерация собственных исключений - throw:
 *      throw объект_ошибки
 *
 * 4. Типы ошибок
 *      * Error - для общих ошибок;
 *      * SyntaxError - для синтаксических ошибок;
 *      * TypeError - для ошибок типов данных;
 *      * ReferenceError - ссылка на несуществующую переменную;
 * */

let res = 0;

try {
    let d = 2;
    res = 5/d;
    console.log(res);

    setTimeout(()  => { // если будет ошибка, то ошибка не отловится, так как через время функция вызовится уже на дпугом участке кода, поэтому блок try catch
        // помещаем внутрь асинхронных функций
        res = 5/d;
        console.log(res);
    }, 900)

    if (res < 5)
        throw new Error("Код выполнен");

} catch (err) {
    console.log("Name:" + err.name);
    console.log("Message: " + err.message);
    console.log("Stack: " + err.stack);
} finally {
    console.log("Finally");
}
