/* Напишите функцию, которая принимает первым параметром объект, вторым -
массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

Если какое-то из свойств не найдено - функция возвращает undefined.

Пример:
const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}
optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined

optionalChaining(obj, ["a", "c", "d"]) // undefined
optionalChaining(obj, ["b", "d", "a"]) // undefined */

function optionalChaining (obj, chain) {
    if (chain.length > 1) {
        let objKey = chain.shift();

        if (obj[objKey])
            return optionalChaining(obj[objKey], chain);
    } else {
        return obj[chain[0]];
    }
}

const obj = {
    a: {
        b: {
            c: {
                d: 'Привет!'
            }
        }
    }
};

console.log(optionalChaining(obj, ["a", "b", "c", "d"]));
console.log(optionalChaining(obj, ["a", "b", "c", "d", "e"])); // undefined
console.log(optionalChaining(obj, ["a", "c", "d"])); // undefined
console.log(optionalChaining(obj, ["b", "d", "a"])); // undefined