/* SumFileSizes
Напишите функцию, которая принимает имена двух файлов и вызывает функцию,
переданную третьим параметром и передает ей первым агрументом сумму их размеров.


Для получения рамзера файла необходимо использовать функцию getFileSize(filename, cb). */

let fileSizes = {
    testFile1: 65,
    testFile2: 48,
}

function funcSum(a = 0, b = 0) {
    return a + b;
}

function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
    getFileSize(filename1, size1 => {
        getFileSize(filename2, size2 => {
            cb(size1 + size2);
        });
    });
}

console.log(sumFileSizes("testFile1", "testFile2", funcSum));