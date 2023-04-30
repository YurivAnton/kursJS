"use strict";

let aside = document.querySelector('aside #config');

let rooms = {
    'livingRoom': ['light', 'volume', 'klima', 'tv', 'window'],
    'kitchen': ['light', 'volume', 'window'],
    'bedRoom': ['light', 'volume', 'klima', 'window'],
    'corridor': ['light', 'volume'],
    'wc': ['light'],
    'bathroom': ['light', 'volume'],
}

let cancelCheckAllBnt = document.querySelector('#cancelCheckAllBnt');
cancelCheckAllBnt.addEventListener('click', function () {
    for (let input of inputs) {
        input.removeAttribute('checked', '');
    }
})

let checkAllBnt = document.querySelector('#checkAllBnt');
checkAllBnt.addEventListener('click', function () {
    for (let input of inputs) {
        input.setAttribute('checked', '');
    }
})


for (let room in rooms) {
    let li = document.createElement('li');
    li.textContent = room;

    let ul = document.createElement('ul');
    for (let item of rooms[room]) {
        // console.log(room);
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'checkbox';
        if (item == 'window' || item == 'klima' || item == 'tv') {
            input.setAttribute('disabled', '');
        }
        input.setAttribute('id', room + '_' + item);
        if (window.localStorage.getItem(room + '_' + item)) {
            input.setAttribute('checked', '');
        }
        li.append(input);
        let label = document.createElement('label');
        label.setAttribute('for', room + '_' + item);
        label.textContent = item;
        li.append(label);
        ul.append(li);
    }
    li.append(ul);
    aside.append(li);
}

let inputs = document.querySelectorAll('input');
function getDevices(roomName, itemName) {
    let devices = document.querySelector(roomName);
    for (let item of devices.children) {
        if (item.classList.contains(itemName)) {
            item.classList.toggle('active');

            if (item.classList.contains('volume')/*  && item.classList.contains('active') */) {
                item.classList.remove('vol3');
                item.classList.remove('vol0');
                // item.classList.remove('active');

            }
            console.log(itemName);
        }

        // console.log(item);
    }

}
// console.log(inputs);
for (let input of inputs) {
    let matches = input.id.match(/([a-zA-Z]+)\_([a-zA-Z]+)/);
    let roomName = '.' + matches[1];
    let itemName = matches[2];

    if (input.checked) {
        getDevices(roomName, itemName);
    }

    input.addEventListener('click', function () {
        getDevices(roomName, itemName);
    })
}

let saveBnt = document.querySelector('#saveBnt');
saveBnt.addEventListener('click', function () {
    for (let input of inputs) {
        if (input.checked) {
            window.localStorage.setItem(input.id, input.id);
        } else {
            window.localStorage.removeItem(input.id);
        }
    }
    document.location.reload();
})



// console.log(window.localStorage.getItem('kitchen_light'));
// window.localStorage.clear();
let activeDevices = document.querySelectorAll('.active');

for (let activeDevice of activeDevices) {
    activeDevice.classList.add('dropbtn');

    let subMenuDevice = document.createElement('div');
    subMenuDevice.classList.add('dropdown-content');

    let funcDevice = document.createElement('div');

    funcDevice.classList.add('subMenuDevice');
    let onOffBnt = document.createElement('button');
    onOffBnt.textContent = 'On/Off';

    let range = document.createElement('input');
    range.type = 'range';
    range.setAttribute('min', '0');
    range.setAttribute('max', '2');
    // range.setAttribute('wigth', '75px');


    funcDevice.append(onOffBnt);
    funcDevice.append(range);

    subMenuDevice.append(funcDevice);
    activeDevice.append(subMenuDevice);

    onOffBnt.addEventListener('click', function () {
        if (activeDevice.classList.contains('light')) {
            activeDevice.parentElement.classList.toggle('lightOn');
            range.value = '2';
            activeDevice.parentElement.classList.remove('light0', 'light1', 'light2');
            if (activeDevice.parentElement.classList.contains('lightOn')) {
                this.style.boxShadow = '3px 3px 0 blue';
                console.log(this);
            } else {
                this.style.boxShadow = '';
            }
        }

        if (activeDevice.classList.contains('volume')) {
            if (activeDevice.classList.contains('vol3') || activeDevice.classList.contains('active')) {
                activeDevice.classList.remove('vol3');
                activeDevice.classList.remove('active');
                activeDevice.classList.add('vol0');
                range.value = '0';
            } else {
                activeDevice.classList.remove('vol0');
                activeDevice.classList.add('vol3');
                range.value = '2';
            }
            activeDevice.classList.remove('vol2');
            // console.log(activeDevice);
        }
    })

    range.addEventListener('change', function () {
        if (this.parentElement.parentElement.parentElement.classList.contains('light')) {
            let mainElem = this.parentElement.parentElement.parentElement.parentElement;
            // console.log(mainElem);
            if (mainElem.classList.contains('lightOn')) {
                if (this.value == 0) {
                    mainElem.classList.add('light0');
                    mainElem.classList.remove('light1', 'light2');
                }
                if (this.value == 1) {
                    mainElem.classList.add('light1');
                    mainElem.classList.remove('light0', 'light2');
                }
                if (this.value == 2) {
                    // mainElem.classList.add('light2');
                    mainElem.classList.remove('light0', 'light1');
                }
            }

        }

        if (this.parentElement.parentElement.parentElement.classList.contains('volume')) {
            // window.localStorage.setItem('volLivingRoom', this.value);
            let mainElem = this.parentElement.parentElement.parentElement;
            if (this.value == 0) {
                console.log(mainElem);
                mainElem.classList.add('vol0');
                mainElem.classList.remove('vol2', 'vol3');
            }
            if (this.value == 1) {
                mainElem.classList.add('vol2');
                mainElem.classList.remove('vol0', 'vol3', 'active');
            }
            if (this.value == 2) {
                mainElem.classList.add('vol3');
                mainElem.classList.remove('vol0', 'vol2');
            }
        }

        // console.log(this.parentElement.parentElement.parentElement);
    })
}


// console.log(activeDevices);
