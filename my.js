//^^1. Написать функцию, получающую на вход два числа. Если оба числа
//^^ `чётные - функция возвращает их произведение. Если оба числа нечётные``- функция возвращает их сумму. Если одно из чисел чётное, а второе``нечётное - функция возвращает это нечётное число.`

function numbers(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 * num2;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return num2 + num1;
  } else {
    return num1 % 2 === 0 ? num2 : num1;
  }
}
console.log(numbers(2, 8));
console.log(numbers(3, 11));
console.log(numbers(2, 7));

// ^^ Написать функцию, которая параметром будет
// ^^принимать секунды, а
//^^  возвращать количество суток, соответствующих
// ^^этим секундам.

// function time(seconds) {
// const secondsInMinute = 60;
// const minutesInHour = 60;
// const hoursInDay = 24;
// const secondsInDay = secondsInMinute * minutesInHour * hoursInDay;
//
// const days = secondsInDay / seconds;
// return days;
// }
//
// const seconds = 86400;
// const days = time(seconds);
//
// console.log(`Секунд ${seconds} составляют примерно ${days} суток.`);
//
//* 3 - Написать функцию isPrime, которая принимает число и
//* возвращает true,
//* если оно простое (имеет только два делителя: 1 и само
// *число), и
// *false в противном случае.

// function isPrime(number) {
// if (number <= 1) {
// return false; //
// } else if (number === 2) {
// return true;
// } else {
// for (let x = 2; x < n; x++) {
// if (number % x === 0) {
// return false;
// }
// }
// return true;
// }
// isPrime(number);
// }

//^^ 4 - Написать функцию, которая в качестве аргументов
//^^получает два числа и
//^^выводит в консоль наименьшее.

// const result = numMin(8, 5);
// function numMin(num1, num2) {
// if (num1 < num2) {
// return num1;
// }
// return num2;
// }
// console.log(`Наименьшее число: ${result}`);

//^^ 5 -  Написать функцию, получающую на вход два числа. Если оба числа
//^^чётные - функция возвращает их произведение. Если оба числа нечётные
//^^ - функция возвращает их сумму. Если одно из чисел чётное, а второе
//^^нечётное - функция возвращает это нечётное число.

// function numbers(a, b) {
// let result;
//
// if (a % 2 === 0 && b % 2 === 0) {
// result = a * b;
// } else if (a % 2 !== 0 && b % 2 !== 0) {
// result = a + b;
// } else {
// result = a % 2 === 0 ? b : a;
// }
//
// console.log(result);
// return result;
// }
// let result = numbers(2, -4);

//^^6- Написать функцию, которая в качестве аргументов получает два числа и
//^^возвращает массив чисел со значениями от меньшего числа к большему.
//
// function createArray(number1, number2) {
// const minNumber = number1 < number2 ? number1 : number2;
// const maxNumber = number1 > number2 ? number1 : number2;
//
// const resultArray = [];
// for (let i = minNumber; i <= maxNumber; i++) {
// resultArray.push(i);
// }
//
// return resultArray;
// }
//
// const result = createArray(5, 10);
// console.log(result);
