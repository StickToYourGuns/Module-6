// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

const a = 5;
const b = 3;

function first(a){
  function second(b) {
    return a + b;
  }
  return second(b);
}

console.log(first(a));