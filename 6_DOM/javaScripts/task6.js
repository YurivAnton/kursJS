"use strict";

/* Реалізувати логіку підрахунку ціни товару
по його варіаціях(шаблон наведений тут,
при кліку на колір змінювати ціну товару). */

// Придумати ще 2 варіації, від яких буде залежати ціна товару.

const discountCodes = ['asd', 'qwerty', '123'];

let colorItems = document.querySelectorAll('.colors span');
let finalPrice = document.querySelector('#outprice');
const deliver = document.querySelector('#deliver');
const deliverNo = document.querySelector('#deliverNo');
const discountAmount = document.querySelector('.discount input');
const bnt = document.querySelector('.discount button');
let discount = 0;
let deliveryPrice = 0;

for (let colorItem of colorItems) {
    deliver.addEventListener('click', function () {
        deliveryPrice = 10;
        finalPrice.textContent = colorItem.dataset.price - (colorItem.dataset.price * discount / 100) - deliveryPrice;
    })

    deliverNo.addEventListener('click', function () {
        deliveryPrice = 0;
        finalPrice.textContent = colorItem.dataset.price - (colorItem.dataset.price * discount / 100) - deliveryPrice;
    })


    bnt.addEventListener('click', function () {
        if (discountCodes.indexOf(discountAmount.value) != -1) {
            discount = 10;
            finalPrice.textContent = colorItem.dataset.price - (colorItem.dataset.price * discount / 100) - deliveryPrice;
        } else {
            discount = 0;
            finalPrice.textContent = colorItem.dataset.price - (colorItem.dataset.price * discount / 100) - deliveryPrice;
        }
    })
    colorItem.addEventListener('click', function () {
        finalPrice.textContent = colorItem.dataset.price - (colorItem.dataset.price * discount / 100) - deliveryPrice;
    })
}