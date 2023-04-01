"use strict";

// task #1
let listItems = document.querySelectorAll('#list li');

alert(listItems[0].textContent);
alert(listItems[4].textContent);
alert(listItems[1].textContent);
alert(listItems[3].textContent);
alert(listItems[2].textContent);
// end

// task #2
let elemH1 = document.querySelector('h1');
elemH1.style.backgroundColor = 'green';

let paragraphs = document.querySelectorAll('#myDiv p');
paragraphs[0].style.color = 'blue';
paragraphs[0].style.fontWeight = 'bold';

paragraphs[1].style.color = 'red';

paragraphs[2].style.textDecoration = 'underline';
paragraphs[2].style.color = 'blue';

paragraphs[3].style.fontStyle = 'italic';

let list = document.querySelector('#myList');
let result = '';
for (let i = 0; i < list.children.length; i++) {
    result += list.children[i].textContent;
}
list.innerHTML = result;

let hiddenText = document.querySelector('span');
hiddenText.style.display = 'none';
// end
