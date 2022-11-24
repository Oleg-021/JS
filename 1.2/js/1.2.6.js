/*
Напишите функцию, которая принимает число.
Если число кратно 3, функция должна возвращать строку «Fizz».
Если кратно 5, функция должна возвращать строку «Buzz».
Если кратно и 3 и 5 - строку «FizzBuzz». В остальных случаях функция должна вернуть переданное число.
*/
/* function fizzbuzz(number) {
    if (!(number % 3) && !(number % 5))
        return 'FizzBuzz';
    else if (!(number % 3))
        return 'Fizz';
    else if (!(number % 5))
        return 'Buzz'
    else
        return number;
}*/
function fizzbuzz(number) {
    return !(number % 3) && !(number % 5) ? 'FizzBuzz' : !(number % 3) ? 'Fizz' : !(number % 5) ? 'Buzz' : number;
}

console.log(fizzbuzz(33));
console.log(fizzbuzz(15));
console.log(fizzbuzz(55));
console.log(fizzbuzz(7));