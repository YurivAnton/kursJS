"use strict";

// task #1
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = 'Name №5' } = names;

console.log(f); // "Tom"

console.log(x); // "Ray"

console.log(fifth); // "Name №5"
// end

// task #2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
// end

// task #3
function mul(...args) {
    let sum = 0;
    for (let arg of args) {
        if (typeof (arg) == 'number') {
            sum += arg;
        }
    }
    return sum;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
// end

// task #4
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => this.data + "");
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return callback => this.result = callback();
    }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
// end

// task #5
function mapBuilder(keysArray, valuesArrays) {
    let map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArrays[i]);
    }
    return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
// end

// task #6
var arr = [];

for (var i = 0; i <= 2; i++) {
    let counter = i;
    arr[i] = function () {
        console.log(counter);
    };
}

arr[0](); // 0
arr[arr.length - 1](); // 2
// end