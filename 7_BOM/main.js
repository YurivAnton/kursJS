"use strict";
// task #1
/* let newWindow = open('/7_BOM/index.html', 'example', 'width=300,height=300');
setTimeout(() => resizeTo(500, 500), 2000);
setTimeout(() => moveTo(200, 200), 2000);
setTimeout(() => close(), 2000); */
// end

// task #2
/* let bnt = document.querySelector('div button');


function changeCSS() {
    let paragraph = document.querySelector('#text');
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
}
bnt.addEventListener('click', changeCSS); */
// end

// task #3
/* let bntBgBlue = document.querySelector('#bntBgBlue');
bntBgBlue.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

let bntBgPink = document.querySelector('#bntBgPink');
bntBgPink.addEventListener('dblclick', function () {
    document.body.style.backgroundColor = 'pink';
})

let bntBgBrown = document.querySelector('#bntBgBrown');
bntBgBrown.addEventListener('mousedown', function () {
    document.body.style.backgroundColor = 'brown';
})
bntBgBrown.addEventListener('mouseup', function () {
    document.body.style.backgroundColor = 'white';
})

let link = document.querySelector('#link');
link.addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'yellow';
})
link.addEventListener('mouseout', function () {
    document.body.style.backgroundColor = 'white';
}) */
// end

// task #4
/* let select = document.querySelector('#select');
let options = document.querySelectorAll('#select option');
let bnt = document.querySelector('#bnt');

select.addEventListener('click', function () {
    for (let option of this.options) {
        option.value = '';
    }
    this.options[this.selectedIndex].value = this.options[this.selectedIndex].textContent;
})

bnt.addEventListener('click', function () {
    for (let option of options) {
        if (option.getAttribute('value') != '') {
            option.remove();
        }
    }
}) */
// end

// task #5
/* let liveBnt = document.querySelector('#liveBnt');

liveBnt.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.textContent = 'I was pressed!';
    liveBnt.after(paragraph);
})

liveBnt.addEventListener('mouseover', function () {
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Mouse on me!';
    liveBnt.after(paragraph);
})

liveBnt.addEventListener('mouseout', function () {
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Mouse is not on me!';
    liveBnt.after(paragraph);
}) */
// end

// task #6
/* let windowHeight = document.querySelector('#height');
let windowWidth = document.querySelector('#width');

windowHeight.textContent = document.documentElement.clientHeight;
windowWidth.textContent = document.documentElement.clientWidth;

window.addEventListener('resize', function () {
    windowHeight.textContent = document.documentElement.clientHeight;
    windowWidth.textContent = document.documentElement.clientWidth;
}) */
// end

// task #7
/* let allCities = {
    'ger': ['Berlin', 'Mainz', 'Frankfurt'],
    'usa': ['New York', 'Vashington', 'Nebraska'],
    'ukr': ['Kyiv', 'Lviv', 'Donetsk'],
}
let country = document.querySelector('#country');
let cities = document.querySelector('#cities');
let countryName = document.querySelector('#countryName');
let cityName = document.querySelector('#cityName');

country.addEventListener('click', function () {
    cities.innerHTML = '';
    let countryValue = this.options[this.selectedIndex].value;
    countryName.textContent = '';
    cityName.textContent = '';
    countryName.textContent = this.options[this.selectedIndex].textContent;

    for (let city of allCities[countryValue]) {
        let option = document.createElement('option');
        option.textContent = city;
        option.value = city;
        cities.append(option);

    }
    cities.addEventListener('click', function () {
        cityName.textContent = '';
        cityName.textContent += ', ';
        cityName.textContent += cities.options[this.selectedIndex].textContent;
    })
}) */
// end

// task #7
