"use strict";

let main = document.createElement('main');
main.classList.add('mainClass', 'check', 'item');

let div = document.createElement('div');
div.id = 'myDiv';

let paragraph = document.createElement('p');
paragraph.textContent = 'First paragraph';

div.append(paragraph);
main.append(div);
document.body.prepend(main);