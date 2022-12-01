/** CLASSES
 *
 */


/* 1. Создание классов */

class Animal { // объяление класса (class)
    static type = "ANIMAL"; // статическая переменная (static)

    constructor(options) { // объявление конструктора со входными параметрами (constructor)
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice() {
        console.log(`I'm ${this.age} years old ${this.name} animal.`)
    }
}

class Cat extends Animal { // наследование класса (extends)
    static type = "CAT";

    constructor(options) {
        options.name = "cat";

        super(options); // вызов конструктуора у выше стоящего класса (super)

        this.color = options.color;
    }

    voice() {
        super.voice();
        console.log(`My color is ${this.color}`);
        //console.log(`I'm ${this.age} years old ${this.name} animal. My color is ${this.color}`);
    }

    get ageInfo() { return this.age * 5 }
    set ageInfo(ageInCatFormat) { this.age = ageInCatFormat / 5 }

}


let dog = new Animal({
    name: "dog",
    age: 3,
    hasTail: true
});

console.log(dog);
dog.voice();
console.log(Animal.type);

let cat = new Cat({
    name: "frog",
    age: 7,
    hasTail: true,
    color: "black"
});

console.log(cat);
cat.voice();
console.log(Cat.type);
console.log(cat.ageInfo);
cat.ageInfo = 79;
console.log(cat.age);

// ========================
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() { this.$el.style.display = "none"; }
    show() { this.$el.style.display = "block"; }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = options.size + "px";
        this.$el.style.height = options.size + "px";
        this.$el.style.background = options.color;
    }
}

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = "50%";
    }
}

const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red"
});

const box2 = new Box( {
    selector: "#box2",
    size: 150,
    color: "blue"
})

const circle1 = new Circle({
    selector: "#circle1",
    size: 200,
    color: "green"
})



