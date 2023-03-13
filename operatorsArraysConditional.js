"use strict";
// task #1
let a = 1;
let b = 2;
let c = 3;
let res = ('---');
if (a < b && b < c) {
    res = ('+++');
}
console.log(res);
// end

// task #2
let x = 1;
let y = 2;

let res1 = String(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x + y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = parseInt('x') + parseInt('y');// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""
// end

// task #3
let isAdult = prompt('Скільки Вам років?');
if (isAdult >= 18) {
    console.log('Ви досягли повнолітнього віку!')
} else if (isAdult >= 1 && isAdult < 18) {
    console.log('Ви ще надто молоді...');
} else {
    console.log('Ви ввели некоректні дані');
}
// end

// task #4??????????
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = arr.filter(elem => elem != 5) // 5
let counter = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            counter++;
        }
    }
}
console.log(data);

console.log(arr) // [4, 2, 1, 6, 3, 2]
// end

// task 5
let sideA = Number(prompt('Введіть довжину сторони a: '));
let sideB = Number(prompt('Введіть довжину сторони b: '));
let sideC = Number(prompt('Введіть довжину сторони c: '));

if (sideA + sideB == sideC || sideA + sideC == sideB || sideC + sideB == sideA
    || sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('Incorrect data');
} else {
    let p = (sideA + sideB + sideC) / 2;
    let s = Math.pow((p * (p - sideA) * (p - sideB) * (p - sideC)), (1 / 2));

    console.log('Площа трикутника = ', s.toFixed(3));


    if (Math.pow(sideA, 2) + Math.pow(sideB, 2) == Math.pow(sideC, 2)
        || Math.pow(sideA, 2) + Math.pow(sideC, 2) == Math.pow(sideB, 2)
        || Math.pow(sideB, 2) + Math.pow(sideC, 2) == Math.pow(sideA, 2)) {
        console.log('Трикутник прямокутний!');
    } else {
        console.log('Трикутник не прямокутний!');
    }
}
// end

// task 6
let date = new Date();
let hour = date.getHours();

if (hour >= 0 && hour <= 5) {
    console.log('Good night.');
}
if (hour > 5 && hour <= 11) {
    console.log('Good morning.');
}
if (hour > 11 && hour <= 17) {
    console.log('Good afternoon.');
}
if (hour > 17 && hour <= 23) {
    console.log('Good evening.');
}

switch (true) {
    case (hour >= 23 && hour <= 5):
        console.log('Good night.');
        break;
    case (hour > 5 && hour <= 11):
        console.log('Good morning.');
        break;
    case (hour > 11 && hour <= 17):
        console.log('Good afternoon.');
        break;
    case (hour > 17 && hour < 23):
        console.log('Good evening.');
        break;
}
//end

// task #
let option = prompt('Якщо потрібно порахувати скільки рядків коду треба написати введіть "1"\nЯкщо потрібно порахувати скільки разів Ви може запізнитися. введіть "2"\nЯкщо потрібно порахувати скільки грошей Вам заплатять і чи заплатять взагалі введіть "3"');
let profit;
let lates;
let amountLines;

switch (option) {
    case '1':
        profit = Number(prompt('Введіть бажаний дохід: '));
        lates = Number(prompt('Введіть кількість запізнень: '));
        if (profit != 0) {
            if (lates < 3) {
                amountLines = Math.ceil(profit / 50) * 100;
            } else {
                amountLines = Math.ceil((profit + Math.floor(lates / 3) * 20) / 50) * 100;
            }
            console.log(`Вам потрібно написати ${amountLines} рядків коду.`);
        } else {
            console.log('Incorrect data');
        }
        break;
    case '2':
        profit = Number(prompt('Введіть бажаний дохід: '));
        amountLines = Number(prompt('Введіть кількість рядків коду: '));

        if (profit != 0 && amountLines >= 100) {
            lates = ((Math.floor(amountLines / 100) * 50) - profit) / 20;
            console.log(`Ви можете запізнитись -  ${Math.floor(lates) * 3 + 2} разів`);
        } else {
            console.log('Incorrect data');
        }
        break;
    case '3':
        lates = Number(prompt('Введіть кількість запізнень: '));
        amountLines = Number(prompt('Введіть кількість рядків коду: '));

        if (amountLines >= 100) {
            profit = Math.floor(amountLines / 100) * 50 - Math.floor(lates / 3) * 20;
            if (profit > 0) {
                console.log(`Ви заробите ${profit}$`);
            } else {
                console.log('Ви не заробите нічого!!!');
            }
        } else {
            console.log('Incorrect data');
        }
}