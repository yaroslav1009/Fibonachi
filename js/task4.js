//На рекурсію. Написати функцію fibonacciList(n) яка виводить строку з n-чисел Фібоначі
// Ряд Фібоначчі містить числа, в яких наступне число визначається як сума двох попередніх чисел
// function fib(n) {
//       // let fibNull = 0
//       let numNull = n - 1 + n - 2;
//       for(i=0;i<=numNull;i++){
//         if(i === n) break
//         console.log(i)
//       }
//   }

// function fib(n) {
//   if(n <= 1) {
//     console.log(0)
//   } else {
//     for(i=0;i<=(n - 1) + (n - 2);i++){
//       console.log(i)
//     }
//   }
// }
// fib(13)

console.log('Fibonachi')
function fibNum(n){
  let y = 0
  for(i=0;i<=n;i++){
    y += n
    console.log(fib(i))
  }
  function fib(k) {
    if(k<2) return 1;
    return  fib(k-1) + fib(k-2);
  }
}

fibNum(5)

// function numberProgress (count) {
//   return function(num) {
//       console.log(count += num);
//   }
// }

// let sum = numberProgress(0);
// sum(3);
// sum(5);
// sum(20);
// console.log(fib(7));