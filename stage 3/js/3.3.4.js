/* Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.

Пример использования

getUsersInfo((users) => {
  console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
});
Для получения данных вам предоставлены 2 асинхронные функции

getUsersIds - Возвращает массив с идентификаторами пользователей
getUserInfo - Возвращает данные пользователя по заданному идентификатору
getUsersIds((ids) => {
  console.log(ids); // ['id2', 'id6']
});

getUserInfo('someUserId', (userInfo) => {
  console.log(userInfo); // { name: 'Alex', age: 70 }
});
Функция должна вызвать callback, переданный первым агрументом и передать туда массив данных о пользователях.

Порядок пользователей в результирующем массиве должен соответствовать порядку идентификаторов в массиве из getUsersIds

Hint: Вне платформы вы можете создать эти функции с помощью setTimeout и какого-то общего хранилица данных. */

const { getUserInfo, getUsersIds } = db;

function getUsersInfo(onLoad) {
    onLoad(new Promise((resolve, reject) => {
        const userIds = getUsersIds();
        resolve(userIds);
    }).then(userIds => {
        const users = [];

        for (let i=0; i<userIds.length; i++)
            users.push(new Promise((resolve, reject) => {
                resolve(getUserInfo(userIds[i]));
            }).then(user => user));

        return users;
    }));
}

/*  getUsersIds(ids => {
        let array = [];
        let count = 0;
        for (let i = 0; i < ids.length; i++) {
            getUserInfo(ids[i], obj => {
                array[i] = obj;
                if (++count === ids.length)
                    callback(array);
            });
        }
    });*/