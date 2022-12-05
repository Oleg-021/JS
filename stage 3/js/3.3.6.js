/* Давайте напишем функцию, которая будет увеличивать зарплату сотруднику с наименьшей зарплатой.

Вам нужно

Получает данные по всем работникам
Находит работника с наименьшей зарплатой
Отправляет запрос на повышение зарплаты этому сотруднику на 20%
Если запрос прошел успешно - отправить сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
Если запрос завершился неудачей - отправить данные об ошибке администратору
Должна всегда возвращать resolved промис с boolean значением:

true если увеличение прошло успешно
false если нет
Все функции для получения/изменения данных асинхронны и возвращают промисы.
Вам предоставлены функции:

api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
api.notifyAdmin(error); // Принимает ошибку */


function increaseSalary() {
    // Write your code here
    return api.getEmployees().then(function (employeesData) {
        return api.getEmployees().then(function (employeesData) {
            return employeesData.reduce((result, item) => {
                if (result.salary) {
                    if (result.salary > item.salary)
                        result = item;
                } else
                    result = item;

                return result;
            }, {});
        }).then(function (employeeBeforeSalary) {
            return api.setEmployeeSalary(employeeBeforeSalary.id, employeeBeforeSalary.salary * 1.2);
        }).then(function (employeeAfterSalary) {
            return api.notifyEmployee(employeeAfterSalary.id, `Hello, ${employeeAfterSalary.name}! Congratulations, your new salary is ${employeeAfterSalary.salary}!`);
        }).catch(err => {
            return api.notifyAdmin(err).then(() => false);
        });
    }).then(function (employeeBeforeSalary) {
       return api.setEmployeeSalary(employeeBeforeSalary.id, employeeBeforeSalary.salary * 1.2);
    }).then(function (employeeAfterSalary) {
       return api.notifyEmployee(employeeAfterSalary.id, `Hello, ${employeeAfterSalary.name} Congratulations, your new salary is ${employeeAfterSalary.salary}!`);
    }).catch(err => {
       return api.notifyAdmin(err).then(() => false);
    });
}

const api = {
    _employees: [
        { id: 1, name: 'Alex', salary: 120000 },
        { id: 2, name: 'Fred', salary: 110000 },
        { id: 3, name: 'Bob', salary: 80000 },
    ],

    getEmployees() {
        return new Promise((resolve) => {
            resolve(this._employees.slice());
        });
    },

    setEmployeeSalary(employeeId, newSalary) {
        return new Promise((resolve) => {
            this._employees = this._employees.map((employee) =>
                employee.id !== employeeId
                    ? employee
                    : {
                        ...employee,
                        salary: newSalary,
                    }
            );
            resolve(this._employees.find(({ id }) => id === employeeId));
        });
    },

    notifyEmployee(employeeId, text) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },

    notifyAdmin(error) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },

    setEmployees(newEmployees) {
        return new Promise((resolve) => {
            this._employees = newEmployees;
            resolve();
        });
    },
};