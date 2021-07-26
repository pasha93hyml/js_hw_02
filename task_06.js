let input;
const numbers = [];
let total = 0;

function askNumberToPush() {
  input = prompt("Введите число", 0);

  if (input) {
    if (!isNaN(Number(input))) {
      numbers.push(input);
      askNumberToPush();
    } else {
      alert("Было введено не число, попробуйте еще раз");
      askNumberToPush();
    }
  }
  return;
}

askNumberToPush();

for (let num of numbers) {
  total += Number(num);
}

console.log(total);
