/* Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

Person
const person = new Person('Johannes', 'Helms', '1983-01-02');
Методы
getAge() - Возвращает возраст владельца счета
Свойства
firstName - Имя
lastName - Фамилия
fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)

 Account
new Account(person, 1000);
Методы
+ addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
+ withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
+ getAmount() - Получить текущее состояние счета
+ getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. Поле target может иметь значения in или out.
transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
Свойства
person - Владелец счета
Пример
const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

Disclamer
Конечно, математику с плавающей точкой для обработки балансов использовать не стоит - будут накапливаться ошибки вычисления. Но в данном упражнении этим можно пренебречь.*/

class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    getAge() {
        let currentDate = new Date();
        let birthDate = new Date(this.birthDate);
        let age = currentDate.getFullYear() - birthDate.getFullYear();

        if (currentDate.getMonth() <= birthDate.getMonth())
            if (currentDate.getDate() <= birthDate.getDate())
                if (currentDate.getHours() < birthDate.getHours())
                    age--;

        return age;
    }

    get fullName() { return this.firstName + " " + this.lastName; }
}

class Account {
    static transfer(fromAccount, toAccount, moneyAmount) {
        fromAccount.withdrawMoney(moneyAmount, `Transfer money to ${toAccount.person.fullName}.`)
        toAccount.addMoney(moneyAmount, `Added from ${fromAccount.person.fullName}`);
    }

    constructor(person, moneyAmount) {
        this.person = person;
        this.moneyAmount = moneyAmount;
        this.history = [];
        /*this.history.push({
            timestamp: new Date() - 0,
            target: "in",
            amount: moneyAmount,
            description: "Account creation"
        });*/
    }

    addMoney(moneyAmount, description) {
        this.moneyAmount += moneyAmount;
        this.history.push({
            timestamp: new Date() - 0,
            target: "in",
            amount: moneyAmount,
            description: description
        });
    }

    withdrawMoney(moneyAmount, description) {
        this.moneyAmount -= moneyAmount;
        this.history.push({
            timestamp: new Date() - 0,
            target: "out",
            amount: moneyAmount,
            description: description
        });
    }

    getAmount() { return this.moneyAmount; }

    getAccountHistory() { return this.history; }
}

const alexander = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alexander, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

Account.transfer(alexAccount, helenAccount, 250);
console.log(alexAccount);
console.log(helenAccount);


const alex = new Person('Alexey', 'Petrov', '1990-05-25');
console.log(alex.getAge());
// 2019-05-23
// 1990-05-25