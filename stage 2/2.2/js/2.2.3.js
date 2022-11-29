/* Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

Два объекта считаются равными, если у них все свойства одинаковы. В случае,
если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму. Пример:

const firstObject = {
  a: {
    b: {
      c: 1,
      d: 'string',
      e: {
        num: 1
      }
    }
  }
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: 'string',
      c: 1,
    }
  }
};

deepEqual(firstObject, secondObject); // true
deepEqual({ a:1, b: 3 }, { b: 2, a: 1}); // false
deepEqual(1, 2); // false
deepEqual(true, false); // false */

const firstObject = {
    a: {
        b: {
            c: 1,
            d: 'string',
            e: {
                num: 1
            }
        }
    }
};

const secondObject = {
    a: {
        b: {
            e: {
                num: 1,
            },
            d: 'string',
            c: 1,
        }
    }
};


function deepEqual (obj1, obj2) {
    if (obj1 === null || obj2 === null ||
        obj1 === undefined || obj2 === undefined)
        return  obj1 === obj2;

    if (typeof obj1 === "object") {
        let keysObj1 = Object.keys(obj1),
            keysObj2 = Object.keys(obj2);

        if (keysObj1.length !== keysObj2.length)
            return false;

        for (let i=0; i<keysObj1.length; i++)
            if (!deepEqual(obj1[keysObj1[i]], obj2[keysObj1[i]]))
                return false;
    }
    else
        if (obj1 !== obj2)
            return false;

    return true;
}

console.log(deepEqual({ a:1, b: 3 }, { b: 2, a: 1}));
console.log(deepEqual({ a:1, b: 2 }, { b: 2, a: 1}));
console.log(deepEqual(firstObject, secondObject));

console.log(deepEqual({"name":"Misha","order":{"price":20}}, null));
console.log(deepEqual({"name":"Misha","order":{"price":20}}, {"name":"Misha","order":{"price":20},"extraField":null}));
console.log(deepEqual({"name":"Misha","order":{"price":20}}, {"order":{"price":20},"name":"Petya"}));