/* Реализуйте функционал для работы с книгами в библиотеке:

создание книги(добавление новой книги в библиотеку)
Выдача книги читателю
Получение книги от читателя
Получение у кого книга сейчас находится
Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

name - имя книги
author - имя автора
year - год книги
reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
Необходимо реализовать на прототипе следующие методы работы с книгой:

+ isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках

+ takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана

+ returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке

+ changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата

+ changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата

+ getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи */

function Book(name, author, year, reader = null) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = reader;
}

Book.prototype.isAvailable = function () { return this.reader === null};
Book.prototype.takeBook = function (readerName) {
    if (this.reader === null) {
        this.reader = readerName;
        return true;
    } else
        return false;
};
Book.prototype.returnBook = function () {
    if (this.reader === null)
        return false;
    else {
        this.reader = null;
        return true;
    }
};
Book.prototype.changeBookName = function (newBookName) {
    if (this.name === newBookName)
        return false;
    else {
        this.name = newBookName;
        return true;
    }
};
Book.prototype.changeAuthorName = function (newAuthorName) {
    if (this.author === newAuthorName)
        return false;
    else {
        this.author = newAuthorName;
        return true;
    }
};
Book.prototype.getCurrentReader = function () {
    return this.reader;
};