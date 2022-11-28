// Шаблонные строки
const firstName = "Oleg";
const lastName = "Litvin";
const age = 24;

let str = "str";

str = "My name is " + firstName + ' ' + lastName;

// обычный способ
str = "<ul>" +
        "<li>First Name: " + firstName + "<li>" +
        "<li>Last Name: " + lastName + "<li>" +
        "<li>Age: " + age + "<li>" +
    "</ul>";

// шаблонная строка
str = ` 
    <ul>
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Age: ${age}</li>
        <li>Math.random: ${ Math.random() }</li>
        <li>5 + 5 =: ${ 5 + 5 }</li>
    </ul>
`; // шаблонная строка

console.log(str);
document.body.innerHTML = str;