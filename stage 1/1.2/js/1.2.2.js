/* Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект,
в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке.

Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.

Пример:
console.log(lettersCount('aAAbbccde'));
// {
//    a: 3,
//    b: stage 2,
//    c: stage 2,
//    d: stage 1,
//    e: stage 1,
// }*/

const lettersCount = (str) => {
    let obj = {};
    let chars = str.toLocaleLowerCase().split("");

    for (let i=0; i<chars.length; i++)
            if (chars[i] in obj)
                obj[chars[i]]++;
            else
                obj[chars[i]] = 1;

    return obj;
};

const str = 'I am the Boss here, so you have to obey!';

console.log(lettersCount(str));
console.log(lettersCount('aAAbbccde'));


