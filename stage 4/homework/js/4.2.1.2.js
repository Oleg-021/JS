// Решение 1
const tableTbodyChildren = document.querySelector("table").firstElementChild.children;
let columnCount = 0;

for (let tr of tableTbodyChildren) {
    tr.children[columnCount].style.backgroundColor = "red";
    columnCount++;
}

//Решение 2
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}


/*const table = document.querySelector("table");
console.log(table);
const tableTbody = table.firstElementChild;
console.log(tableTbody);
const tableTbodyChildren = tableTbody.children;
console.log(tableTbodyChildren);

let columnCount = 0;
for (let tr of tableTbodyChildren) {
    const trChildren = tr.children;
    let td = trChildren[columnCount];
    console.log(td);
    td.style.backgroundColor = "red";

    columnCount++
}*/