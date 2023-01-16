// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


let anyArr = [4, 8, 15, 16, 23, 42, 0];
let odd = 0;
let even = 0;
let zero = 0;

function calcItems(arr){
  anyArr.forEach(function(item){
    if (typeof item == "number") {
      if (item == 0) {
        zero++; 
      } else if (item % 2 == 0) {
        odd++;
      } else {
        even++;
      }
    }
  })
}

calcItems(anyArr);

console.log(`Четных: ${odd}, нечетных: ${even}, нулей: ${zero}`);