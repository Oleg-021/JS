/* Реализуйте функцию getLanguagesStatistic, которая поможет IT журналу подвести итоги 2019 года по
популярности использования языков программирования. На входе функция получает массив отзывов пользователей.
Необходимо вернуть объект в формате { languageName: count, anotherLanguageName: anotherCount, ... },
где languageName - название языка в строке, а count - число отзывов, которые оставили программисты, использующие
этот язык. При этом следует учитывать только те отзывы пользователей, которые были оставлены в 2019 году.
Год отзыва хранится в поле year, язык - в поле language.

Отзыв предоставлен в следующем формате:

{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 }
Данные на входе:

const data = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
  { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];
const result = getLanguagesStatistic(data);
Данные на выходе:

console.log(result);
// {
//   C: 1,
//   JavaScript: 2
// } */

const getLanguagesStatistic = (feedbacks) => {
    return feedbacks.filter(feedback => feedback.year === 2019).reduce((resultObj, feedback) => {
         resultObj[feedback.language] = (resultObj[feedback.language] || 0) + 1;
         return resultObj;
    } ,{});

    /*let result = {};

    feedbacks.forEach(feedback => {
       let {language: feedbackLanguage, year: feedbackYear} = feedback;
        if (feedbackYear === 2019)
            if (result[feedbackLanguage] === undefined)
                result[feedbackLanguage] = 1;
            else
                result[feedbackLanguage]++;
    });

    return result;*/
};

const data = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
    { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];

const result = getLanguagesStatistic(data);
console.log(result);