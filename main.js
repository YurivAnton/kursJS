"use strict";
// task #2
console.log('Yuriv');
// end

// task #3
// a) - b)
let variable1 = 'variable1';
let variable2 = 'variable2';
// c)
alert(variable1);
alert(variable2);
// d)
variable1 = variable2;
// e)
alert(variable1);
alert(variable2);
// end

// task #4
let variable3;
let examplObj = {
    string: 'String',
    number: 10,
    boolean: true,
    undefined: variable3,
    null: null
};
console.log(examplObj);
//end

// task #5
let isAdult = confirm('Are you have 18 years old');
console.log(isAdult);
//end

// task #6
let name = 'Anton';
let surname = 'Yuriv';
let group = 'JS fundamental';
let age = 36;

let maritalStatus = true;

console.log(typeof name);
console.log(typeof surname);
console.log(typeof group);
console.log(typeof age);
console.log(typeof maritalStatus);

console.log(age);
console.log(maritalStatus);
console.log(name);
console.log(surname);
console.log(group);

let examplNull = null;
let examplUndefined;
console.log(typeof examplNull);
console.log(typeof examplUndefined);
//end

// task #7
let login = prompt('Please type your login: ', 'login');
let mail = prompt('Type your email adress: ', 'email');
let password = prompt('Type your password: ', 'pass');

document.write('Dear ' + login + ', your email is ' + mail + ', your password is ' + password);
//end

// task #8
let secInHour = 60 * 60;
let secInDay = secInHour * 24;
let secInMonth = secInDay * 31;
alert('One hour has: ' + secInHour + ' seconds');
alert('One day has: ' + secInDay + ' seconds');
alert('One month has: ' + secInMonth + ' seconds');
// end

//bonus task
let tiket = prompt('Введіть номер свого місця: ');
let place = {
    upOrDown: ' нижнє',
    sidePlace: ' бокове',
    nearToilet: '!',
    kupe: ''
}

if (tiket >= 1 && tiket <= 54) {
    if (tiket % 2 == 0) {
        place.upOrDown = ' верхнє';
    }
    if (tiket >= 1 && tiket <= 36) {
        place.sidePlace = '';
        place.kupe = 'купе № ' + Math.ceil(tiket / 4);
    }
    if (tiket >= 35 && tiket <= 38) {
        place.nearToilet = ' біля туалета!';
    }
    alert('У вас: ' + place.kupe + place.upOrDown + place.sidePlace + ' місце' + place.nearToilet);
} else {
    alert('Ви ввели неіснуючий номер місця!!!');
}

