const text1 = `Some
simple multiline
text`;
const text2 = `some\ntext`;

/*
function wrapInParagraph(str){
    let strArr = str.split('\n');

    for (let i=0; i<strArr.length; i++)
        strArr[i] = `<p>${ strArr[i] }</p>`;

    return strArr.join('\n');
}
*/

function wrapInParagraph(str) {
    return str.split('\n').map(item => `<p>${item}</p>`).join('\n');
}

let arr1 = text1.split('\n');
let arr2 = text1.split('\n').map(item => item.length);
let arr3 = text1.split('\n').map(item => '<p>' + item + '</p>');
let arr4 = text1.split('\n').map(item => `<p>${ item }</p>`).join('\n');

console.log(wrapInParagraph(text1));
console.log(wrapInParagraph(text2));



