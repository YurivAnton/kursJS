"use strict";

// реалізувати вивід даних із полів 
// при кліку на кнопку "Надіслати" в поле outBlock
const fields = document.querySelectorAll('fieldset input');
const button = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

button.addEventListener('click', function () {
    const list = document.createElement('ul');
    for (const field of fields) {
        if (field.dataset.form) {
            const item = document.createElement('li');
            item.textContent = field.dataset.form + ': ' + field.value;
            list.append(item);
        }
    }
    outBlock.append(list);
})