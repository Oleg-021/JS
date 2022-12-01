/** Object.create(class, obj)
 * class - параметр-класс, на основе которого создаётся объект
 * obj - параметр-объект, задающий поля и значения новому объекту
 */


const person = Object.create({
        calculateAge: function () {
            console.log("Age: " + (new Date().getFullYear() - this.birthYear));
        }
    },
    {
        name: {
        value: "Ivan", // value - задаёт значение полю объекта
        enumerable: true, // enumerable - делает поле видным (по умолчанию false)
        writable: true, // writable - даёт возможность изменять поле объекта (по умолчанию false)
        configurable: true // configurable - даёт возможность удалять ключ из объекта (по умолчанию false)
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        writable: true,
        configurable: false
    },
    age: {
        get() {
            return (new Date()).getFullYear() - this.birthYear;
        },
        set(age) {
            this.birthYear = (new Date()).getFullYear() - age;
        },
        enumerable: true,
    }
});

person.name = "Max";
console.log(person);
console.log(person.birthYear);

delete person.name; // удаление поля из объекта - вернёт true
delete person.birthYear; // - false
console.log(person.name);
console.log(person.birthYear);
console.log(person.age);
person.age = 19;
console.log(person.birthYear);
console.log(person.age);
person.calculateAge();

for (let key in person) // цикл for..in продвигается по полям объекта и его прототипа
    if (person.hasOwnProperty(key)) // hasOwnProperty - проверяет, является ли поле полем только объекта
        console.log("Поле объекта - " + key);
    else
        console.log("Поле прототипа - " + key);

