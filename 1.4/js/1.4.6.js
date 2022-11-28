/* Дан список информации о людях.

Необходимо вернуть массив, содержащий самого старшего человека в списке.
Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

Возраст хранится в поле age.

Данные на входе:

const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
const result = getMostSenior(data);
Данные на выходе:
=
console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ] */

// 1. Решение через sort и foreach
/*const getMostSenior = humans => {
    let result = [];
    humans.sort((a, b) => {console.log(`a: ${a.firstName}, b: ${b.firstName}`); return a.age - b.age;});

    let maxAge = humans[0].age;
    humans.forEach(human => {
        if (maxAge === human.age)
            result.push(human);
    })

    return result;
};*/

// 2. Рещение через map
const getMostSenior = humans => {
    let maxAge = -1;
    humans.forEach(human => {
       if (maxAge < human.age)
           maxAge = human.age;
    });

    return humans.filter(human => human.age === maxAge);
};


const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]

console.log(getMostSenior(data));
