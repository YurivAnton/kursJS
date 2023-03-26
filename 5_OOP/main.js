"use strict";
// task #1????????????????????????????????????
class Circle {
    #center;
    #radius;
    #PI = 3.14;

    constructor(center, radius) {
        this.#center = center;
        this.#radius = radius;
    }

    getLengthCircle() {
        this.l = 2 * this.#PI * this.#radius;
        return this.l;
    }

    static getLength(radius) {
        this.leng = 2 * 3.14 * radius;
        return this.leng;
    }

    getCircle() {
        return this;
    }
}

let circle1 = new Circle(0, 10);
console.log(circle1.getLengthCircle());
console.log(Circle.getLength(10));
console.log(circle1.getCircle());

// end

// task #2
function propsCount(currentObject) {
    let counter = 0;
    for (let key in currentObject) {
        counter += 1;
    }
    console.log(counter);
}
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
propsCount(mentor);
// end

// task #3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return this.surname + ' ' + this.name + ' ' + midleName;
    }

    showCourse() {
        const curentDate = new Date();
        return curentDate.getFullYear() - this.year;
    }
}

let person1 = new Person('Anton', 'Yuriv');
console.log(person1.showFullName());

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
// end

// task #4
class Marker {
    #color;
    #amountInk;

    constructor(color, amountInk) {
        this.#color = color;
        if (amountInk >= 0 && amountInk <= 100) {
            this.#amountInk = amountInk;
        }
    }

    print(someText) {
        let coloredText = '';
        let notColoredText = '';

        for (let i = 0; i < someText.length; i++) {
            if (this.#amountInk > 0) {
                coloredText += someText[i];
                if (someText[i] != ' ') {
                    this.#amountInk += -0.5;
                }
            } else {
                notColoredText += someText[i];
            }
        }

        let paragraf = document.createElement('p');
        paragraf.innerHTML = `<span style="color: ${this.#color}">${coloredText}</span>`;
        document.body.append(paragraf);
    }

    setAmountInk() {
        this.#amountInk = 100;
    }
}

class refuelMarker extends Marker {
    refuel(obj) {
        obj.setAmountInk();
    }
}

let marker1 = new Marker('red', 4.5);
marker1.print('Ant onads rghas; orhfi');

let marker2 = new Marker('green', 5);

marker2.print('Ant onads rghas; orhfi');

let refuel = new refuelMarker();
refuel.refuel(marker2);
marker2.print('Ant onads rghas; orhfia');
// end

// task #5
class Worker {
    fullName;
    dayRate;
    workingDays;
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        if (this.workingDays > 0) {
            return this.dayRate * this.workingDays;
        }
    }

    showSalaryWithExperience() {
        if (this.workingDays > 0) {
            return this.dayRate * this.workingDays * this.#experience;
        }
    }

    getExperience() {
        return this.#experience;
    }

    setExperience(exp) {
        this.#experience = exp;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.getExperience());
console.log(worker1.showSalaryWithExperience());
worker1.setExperience(1.5);
console.log("New experience: " + worker1.getExperience());
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log("New experience: " + worker2.getExperience());
console.log(worker2.showSalaryWithExperience());
worker2.setExperience(1.5);
console.log("New experience: " + worker2.getExperience());
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log("New experience: " + worker3.getExperience());
console.log(worker3.showSalaryWithExperience());
worker3.setExperience(1.5);
console.log("New experience: " + worker3.getExperience());
console.log(worker3.showSalaryWithExperience());

let workers = [worker1, worker2, worker3];
workers.sort(function (a, b) {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
});
for (let elem of workers) {
    console.log(elem.fullName + ': ' + elem.showSalaryWithExperience());
}
// end