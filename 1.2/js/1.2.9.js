/* Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок,
и проверяет, является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
 */

const areBracketsBalanced = (str) => {
    let chars = str.split("");
    let openBrackets = 0;
    let closeBrackets = 0;

    for (let i=0; i<chars.length; i++) {
        switch (chars[i]) {
            case "(":
                openBrackets++;
                break;
            case ")":
                closeBrackets++;
        }

        if (openBrackets < closeBrackets)
            return false;
    }

    return openBrackets === closeBrackets;
};

let str1 = "My (name is Oleg, I'm from Belarus!";
let str2 = "(Let me speak from)(my heart)";
let str3 = "(Let me speak from)my heart)";
let str4 = "Hello World!"
let str5 = "";

console.log(areBracketsBalanced(str1)); // false
console.log(areBracketsBalanced(str2)); // true
console.log(areBracketsBalanced(str3)); // false
console.log(areBracketsBalanced(str4)); // true
console.log(areBracketsBalanced(str5)); // true