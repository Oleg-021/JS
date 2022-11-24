/** ОБЪЯВЛЕНИЕ **/
const obj = new Object(); // синтаксис 'конструктор объекта'
const user = { // Синтаксис создания литерал объекта
    firstName: 'Oleg',
    age: 24,
    isAdmin: true,
    email: '210696@mail.ru',
    'user-Address': { // при использовании специфичных символов, запрещённых в именах переменных, используются кавычки
        city: 'Minsk',
        postId: 222123
    },
    userEducation: {
        high: true,
        magistrate: false
    },
    skills: ['html', 'css', 'js']
};

/** ОБРАЩЕНИЕ **/
// обращение через точку объект.поле_объекта
console.log(user.firstName);
console.log(user.age);

// обращение через квадратные скобки с кавычками объект['поле_объекта']
console.log(user['isAdmin']);
console.log(user['user-Address']); // всегда используется к полям объекта, объявленных в кавычках

// обращение через переменную (обычно используется, если поля вычисляемы
const address = 'user-Address';
console.log(user[address]);

// вложенные обращения к объектам
console.log(user['user-Address'].city);
console.log(user['user-Address']['postId']);

/** ПЕРЕЗАПИСЬ и СОЗДАНИЕ НОВЫХ ПОЛЕЙ **/
// перезапись данных объекта
user.firstName = 'Pavel';
user["userEducation"].magistrate = true;

// создание новых полей
user.lastname = 'Litvin';
user['user-Address'].codeNumber = '+375';

// выдаст ошибку, так как поле car ещё не инициализировано
//user.car.name = 'BMW';

/** УДАЛЕНИЕ(delete) **/
delete user.lastname;
delete user['userEducation'];

/** ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВА (in) **/
let key = 'firstName';
console.log(key in user);
console.log('lstName' in user);

/** ЦИКЛ for..in **/
let arr = [];
for (let arrKey in user)
    arr.push(user[arrKey]);
console.log(arr);
