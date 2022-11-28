let a = -1;
let b = 2;

if (a > 0)
    b = a;
else
    b += 1;

/** Тернарный оператор
 * выражение ? если true : если false;
 * выражение ? если true : выражение ? если true : если false;
 */
let c = a > 0 ? b = a : b += 1; // не самая лучшая запись, так как тернарный оператор будет возвращать значение после условий

b = a > 0 ? a : b + 1; // наиболее оптимальная запись

b = a > 0 ? 2 : a < 0 ? 3 : 0; // усложнённый тернарный оператор

/** SWITCH...CASE
 * switch() {
 *  case условие1: выражение; break;
 *  case условие2: выражение; break;
 *  case условие3: выражение; break;
 *  ...
 *  case условиеN: выражение; break;
 *  default: выражение;
 * }
 * ! После каждого условного выражения важно устанавливать прерывание(break), так как,
 * если один case выполнился, дальше выполняется всё выражение под ним
 */
let color = 'red';
switch (color) {
    case 'yellow':
        console.log('Жёлтый');
        break;
    case 'orange':
        console.log('Оранжевый');
        break;
    case 'green':
        console.log('Зелёный');
        break;
    case 'red':
        console.log('Красный');
        break;
    default:
        console.log('нет нужного цвета');
}



