const clear = function (elem) {
    while (elem.children.length > 0)
        elem.firstChild.remove();
};

console.log(document.querySelector("#elem").children);