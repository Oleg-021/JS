/* Реализуйте функцию once, которая принимает функцию в качестве аргумента и возвращает новую функцию,
которая вызывает функцию-аргумент, но только единожды. Повторный вызов функции-результата once не должен давать никакого эффекта.

const f = () => console.log('hi!');
const onceF = once(f);
onceF(); // hi!
onceF(); // nothing  */

const once = fn => {
    let flag = true;

    return function () {
        if (flag)
            fn();
        flag = false;
    };
};



const f = () => console.log('hi!');
const onceF = once(f);
onceF(); // hi!
onceF(); // nothing  */