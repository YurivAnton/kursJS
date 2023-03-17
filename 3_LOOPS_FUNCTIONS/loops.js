// task #1
function compact(arr) {
    let newArr = {};
    for (let elem of arr) {
        newArr[elem] = elem;
    }
    let result = new Array();
    for (let item in newArr) {
        result.push(newArr[item]);
    }
    return result;
}

// цей варіант мені сподобався )))
function compactV2(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [5, 3, 4, 5, 6, 7, 3, 121, 5];
let arr2 = compact(arr);
let arr2V2 = compactV2(arr);
console.log(arr2);
console.log(arr2V2);
// end

// task #2
function createArray(start, end) {
    let result = new Array();
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

let arr3 = createArray(2, 9);
console.log(arr3);
// end

// task #3
let a = 1;
let b = 5;
for (let i = a; i <= b; i++) {
    for (let j = a; j <= i; j++) {
        console.log(i);
    }
}
// end

//task #4
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randArray(k) {
    let result = new Array();
    for (let i = 0; i < k; i++) {
        result.push(getRandomInt(1, 500));
    }
    return result;
}

console.log(randArray(5));
// end

// task #5
let arrTask5 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

function selectionOfType(arr) {
    let stringsArr = new Array();
    let numbersArr = [];
    let result = [];

    for (let elem of arr) {
        if (Array.isArray(elem)) {
            for (let item of elem) {
                helper(item);
            }

        }
        helper(elem);
    }

    function helper(someElem) {
        if (typeof (someElem) == 'string') {
            stringsArr.push(someElem);
        }
        if (typeof (someElem) == 'number') {
            numbersArr.push(someElem);
        }
    }

    result.push(stringsArr);
    result.push(numbersArr);
    return result;
}

let newArrTask5 = selectionOfType(arrTask5);
console.log(newArrTask5);
// end

// task #6
/* `op`: 
    1 – віднімання, 
    2 – добуток, 
    3 – ділення, 
    інші значення – додавання 
*/
function calc(a, b, op) {
    if (typeof (a) == 'number' && typeof (b) == 'number' && typeof (op) == 'number') {
        let result = 0;
        switch (op) {
            case (1):
                result = a - b;
                break;
            case (2):
                result = a * b;
                break;
            case (3):
                result = a / b;
                break;
            default:
                result = a + b;
                break;
        }
        return result;
    }
}

console.log(calc(3, 2, 1));
console.log(calc(3, 2, 2));
console.log(calc(6, 2, 3));
console.log(calc(3, 2, 99));
// end

// task #7
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) >= 0) {
            return false;
        }
    }
    return true;
}
console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true