const firstName = "Oleg";
const lastName = 'Litvin';
const age = 26;
const str = `Hello, my name is `;

let value;

value = firstName + " " + lastName; // конкатенация
value += 'I am ' + age; // конкатенация

value = firstName.length; // количество символов в строке
value = firstName[firstName.length - 1]; // последний символ в строке

value = firstName.toLocaleUpperCase(); // ПЕРЕВОД СИМВОЛОВ В ВЕРХНИЙ РЕГИСТР
value = firstName.toLocaleLowerCase(); // перевод символов в нижний регистр

value = firstName.indexOf("O"); // возвращает индекс первого нахождения символа
value = firstName.indexOf("e", 1); // возвращает индекс первого нахождения символа начиная с n-го символа в строке
value = firstName.includes("Oleg"); // возвращает true, если находит, иначе false

value = firstName.slice(0, 5); // обрезает строку начиная с первого по шестой символы
value = firstName.slice(2); // обрезает строку, начиная с третьего символа
value = firstName.slice(0, -5); // обрезает строку с начала и минус 5 символов с конца

value = firstName.replace("O", "A"); // заменяет символ О, на А в строке

//Задача stage 1.stage 1.18
function capitalize(str) {
    let strArr = str.toLocaleLowerCase().split(" ");

    for (let i = 0; i < strArr.length ; i++)
        strArr[i] = strArr[i][0].toLocaleUpperCase() + strArr[i].slice(1);

    return strArr.join(" ");
}
console.log(capitalize("my name iS olEg, and i am froM BelaRUS"));

//Задача stage 1.stage 1.19
const reverseLongWords = (str) => {
    let strArr = str.split(" ");

    for (let i=0; i<strArr.length; i++ )
        if (strArr[i].length > 4)
            strArr[i] = strArr[i].split("").reverse().join("");

    return strArr.join(" ");
};
console.log(reverseLongWords("my name iS olEg, and i am froM BelaRUS"));
