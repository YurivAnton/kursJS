"use strict";

// task #1
function upperCase(str) {
    let res = /[A-Z]/.test(str);
    if (res) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
}

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));
// end

// task #2
function checkEmail(strMail) {
    let res = /^.+\@.+\.[a-z]{2,3}$/.test(strMail);
    return res;
}

console.log(checkEmail("Qmail2@gmail.com"));
// end

// task #3
let str3 = 'Java Script';
let res3 = str3.replace(/(.+)\s(.+)/, '$2 $1');
console.log(str3);
console.log(res3);
// end

// task #4
function validNumberBankAccount(bankAccount) {
    let res = /\d{4}\-\d{4}\-\d{4}\-\d{4}/.test(bankAccount);
    return res;
}
let bankAcc1 = '9999-9999-9999-9999';
let bankAcc2 = 'sdfs-3fd4-sd/8-7 98';
console.log(validNumberBankAccount(bankAcc1));
console.log(validNumberBankAccount(bankAcc2));
// end

// task #5   \@.+\.[a-z]{2,3}
function checkEmailV1(strEmail) {
    let res = /^[A-Za-z]+_?[A-Za-z]+-?[_A-Za-z]+\@.+\.[a-z]{2,3}$/.test(strEmail);
    if (res) {
        return 'Email is correct!';
    } else {
        return 'Email is not correct!';
    }
}

console.log(checkEmailV1('my_m-ail@gmail.com'));
console.log(checkEmailV1('#my_mail@gmail.com'));
console.log(checkEmailV1('my_ma--il@gmail.com'));
// end

// task $6
function checkLogin(strLogin) {
    let regexp = /^[A-Za-z\d.]{2,10}$/g;
    let res = regexp.test(strLogin);
    let matches = strLogin.match(/(\d\.\d)|(\d)/g);

    console.log(matches);
    console.log(res);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
