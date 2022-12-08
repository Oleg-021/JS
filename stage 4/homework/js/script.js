/*const clear = function (elem) {
    while (elem.children.length > 0)
        elem.firstChild.remove();
};*/

/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
*/

const obj = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};


const createTreeInnerHtml = function (container, obj) {
    const makeStringTree = function (obj) {
        let result = "";

        for (let key in obj)
            if (typeof obj[key] === "object" && Object.keys(obj[key]).length > 0) {
                result += `<li>${key}${makeStringTree(obj[key])}</li>`;

            } else
                result += `<li>${key}</li>`;

        return `<ul>${result}</ul>`;
    };

    container.innerHTML = makeStringTree(obj);
};

const createTreeByAppend = function (container, obj) {
    const ul = document.createElement("ul");

    for (let key in obj) {
        const li = document.createElement("li");
        li.textContent = key;
        ul.append(li);

        if (typeof obj[key] === "object" && Object.keys(obj[key]).length > 0)
            createTreeByAppend(li, obj[key]);
    }

    container.append(ul);
};




/*const createTree = function (container, obj) {
    let result;
    const ul = document.createElement("ul");





    const makeLiTree = function (container, obj) {
        for (let key in obj) {


            /*const li = document.createElement("li");
            li.textContent = key;
            container.append(li);

            if (typeof obj[key] === "object" && obj[key].length > 0)
                //makeLiTree(li, obj[key]);
        }
    }

    makeLiTree(ul, obj);
    container.append(ul);
};*/

