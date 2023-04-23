// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
    function counter() {
        console.log(from);
        from++;
        if (from > to) {
            clearInterval(counterInt);
        }
    }
    const counterInt = setInterval(counter, 1000);
}

function printNumbersTimeOut(from, to) {
    function counter(i) {
        console.log(i);
        if (i < to) {
            counterTimeOut = setTimeout(counter, 1000, (i = i + 1)); //i++ здесь не работает почему-то
        }
    }
    let counterTimeOut = setTimeout(counter, 1000, from);
}

printNumbersInterval(3, 6);
// printNumbersTimeOut(9, 13);
