/* Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их
стоимостей. Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.

Пример:

const data = [
  {
    type: 'food',
    price: 130,
  },
  {
    type: 'clothes',
    price: 7300,
  },
  {
    type: 'other',
    price: 1400,
  },
];

calculatePrice(data); // 8830 */

const calculatePrice = (orders) => {
    return Array.isArray(orders) ?
        orders.reduce((result, element) => element["price"] + result, 0) :
        0;

    /*if (Array.isArray(orders))
        return orders.reduce((result, element) => element["price"] + result, 0);
    else
        return 0;*/
};

const data = [
    {
        type: 'food',
        price: 130,
    },
    {
        type: 'clothes',
        price: 7300,
    },
    {
        type: 'other',
        price: 1400,
    },
];

console.log(calculatePrice(data));
console.log(calculatePrice([]));
console.log(calculatePrice({}));
console.log(calculatePrice(undefined));
