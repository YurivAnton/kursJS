// task #1
function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
        throw new Error('It is not an array');
    }
    if (typeof (arr[first]) != 'number') {
        throw new Error('First element is not a number');
    }
    if (typeof (arr[second]) != 'number') {
        throw new Error('Second element is not a number');
    }
    if (arr.indexOf(arr[first]) == -1 || arr.indexOf(arr[second]) == -1) {
        throw new Error('One ar both elem are not exist');
    }

    let result = arr[first] + arr[second];
    return result;
}

try {
    let arr = [1, 2];
    let exampl = sumSliceArray(arr, 0, 1);
    console.log(exampl);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
// end

// task #2
function checkAge() {
    let userName = prompt('Your name is..?');
    if (userName == '') {
        throw new Error('The field is empty! Please enter your name');
    }

    let userAge = prompt('How old are you?');
    if (Number(userAge) < 18 || Number(userAge) > 70) {
        throw new RangeError('Incorect age');
    }
    if (userAge == '') {
        throw new Error('The field is empty! Please enter your age');
    }
    if (typeof (+userAge) != 'number') {
        throw new EvalError('Age must be a number');
    }

    let userStatus = prompt('Choose your status: admin, moderator or user.');
    if (userStatus == '') {
        throw new Error('The field is empty! Please enter your status');
    }
    if (!(userStatus == 'admin' || userStatus == 'moderator' || userStatus == 'user')) {
        throw new EvalError('Bad status');
    }

    alert('Ви отримали доступ до перегляду фільму. Бажаємо приємного перегляду.');
}

try {
    checkAge();
} catch (error) {
    confirm(error.name + ' ' + error.message);
    //confirm(error.message);
}
// end

// task #3
function calcRectangleArea(width, height) {
    if (typeof (width) != 'number' || typeof (height) != 'number') {
        throw new Error('Arguments must be numbers');
    }
    let result = width * height;
    return result;

}

try {
    let width = '3';
    let height = 4;

    let recArea = calcRectangleArea(width, height);
    console.log(recArea);
} catch (error) {
    console.log(error.message);
}
// end

// task #4
class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    let months = {
        1: 'january',
        2: 'february',
        3: 'march',
        4: 'april',
        5: 'may',
        6: 'june',
        7: 'july',
        8: 'august',
        9: 'september',
        10: 'october',
        11: 'november',
        12: 'december',
    }
    if (month >= 1 && month <= 12) {
        return months[month];
    }

    throw new MonthException('Incorrect month number.');
}

try {
    console.log(showMonthName(111));
} catch (exeption) {
    console.log(exeption.name + ' ' + exeption.message);
}
// end

// task #5
/* showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]
 */
function showUser(id) {

    let user = {
        'id': id,
    }

    if (id < 0) {
        throw new Error('ID must not be negative: ' + id);
    }
    return user;
}

function showUsers(ids) {
    let users = [];
    for (let id of ids) {
        try {
            let user = showUser(id);
            users.push(showUser(id));
        } catch (error) {
            console.log(error.message);
        }

    }
    return users;
}

try {
    console.log(showUsers([7, -12, 44, 22]));
} catch (error) {
    console.log(error.name + ': ' + error.message)
}