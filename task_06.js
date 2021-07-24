let input = prompt('Введите число', 0)
const numbers = []
let total = 0

for(let i = 0; input; i += 1) {
    if(!isNaN(Number(input))) {
        numbers.push(Number(input))
        input = prompt('Введите число', 0)
    } else {
        alert('Было введено не число, попробуйте еще раз')
        input = prompt('Введите число', 0)
    }
}

if(numbers.length > 0) {
    for(let num of numbers) {
        total += num
    }
    console.log(`Общая сумма чисел равна ${total}`);
}

/*
Здесь хотел без проверки, но в условии сказано "если массив не пустой"
т.к. цикл for...of не отработает если массив пустой. 

Альтернативно:

for(let num of numbers) {
    total += num
}
console.log(`Общая сумма чисел равна ${total}`);
*/