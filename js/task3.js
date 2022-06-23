// Написати функцію, яка приймає один параметр. При першому виклику, вона його запам'ятовує, при другому - підсумовує переданий параметр з тим, що передали вперше і т.д. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

function numberProgress (count) {
    return function(num) {
        console.log(count += num);
    }
}

let sum = numberProgress(0);
sum(3);
sum(5);
sum(20);

