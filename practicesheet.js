//THIS IS MY JS PRACTICE SHEET. <3
// let input = 'ECMAScript'

// if(input === 'ECMAScript') {
//   console.log('right!')
// } else {
//   console.log('you dont know? ECMAscript')
// }
// function multiple(a,b) {
//   console.log(a * b);
// }

// multiple(6,7)

// function lastLetter(str) {
//   return str.charAt(str.length - 1);
// }

// console.log(lastLetter('rfgehnuigew'))
// function fizzBuzz(num) {
//   for (i = 1; i <= num; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if(i % 3 === 0) {
//       console.log('fizz')
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzBuzz(15)

// function upperCase(string) {
//   let letter = string.charAt(0);
//   let leftOver = string.slice(1);
//   let final = letter.toUpperCase() + leftOver
//   return final 
// }

// console.log(upperCase('amazing'))

// const add = num => num + 7;
// console.log(add(8))

// function troubleshooting() {
// 	const a = 1;
// 	const b = 1;

// 	let result;
// 	result = a + b;
//   return result
// }

// troubleshooting();
// let age = 89;

// if (age < 14 || age > 90) {
//   console.log('you fall outside of range')
// } else {
//   console.log('you fall in range')
// }

// console.log( null || 2 || undefined);


// const a = 1 + 8;
// const b = 22 * 3;
// const c = 5 % 4;
// const d = a - 17;
// const e = a + b + c + d;

// console.log(e)
// (login == 'Employee') ? 'hello' :
// (login == 'Director') ? 'greetings':
// (login == '') ?  'No login' : ''
// let value = -4

// if(value < 0) {
//   console.log('-1')
// } else if(value === 0) {
//   console.log('0')
// } else {
//   console.log('1')
// }


// let admin;
// let user = 'john'
// admin = user
// console.log(admin)

// let ourPlanet = 'earth'
// let currentVisitorName = 'current visitor'
// console.log((4+6+9) / 77)
// let a = 10;
// console.log(9*a);
// let b = 7 * a;
// console.log(b)

//this is object literal notation. its great for one off objects but if you want to make two 
//or more objects of the same type, youre gonna want to use objects with constructors.
// const bike = {
//   gears: 10,
//   currentGear: 0,
//   changeGear: function(direction, changeBy) {
//     if (direction === 'up') {
//       this.currentGear += changeBy;
//     } else {
//       this.currentGear -= changeBy;
//     }
//   }
// 
//calculate days before christmas
//i dont know what the variable is for, the 1000 times 60 times whatever.
// function calculate() {
//   let today = new Date();
//   let cmas = new Date(today.getFullYear(), 11, 25);

//   if(today.getMonth() == 11 && today.getDate() > 25) {
//     cmas.setFullYear(cmas.getFullYear() + 1)
//   }

//   let variable = 1000 * 60 * 60 * 24;
//   console.log(Math.ceil((cmas.getTime() - today.getTime()) / (variable)))
// }

// calculate();


// function randomGame() {
//   const gnum = prompt('guess a number between 1 and 10')

//   let num = Math.ceil(Math.random() * 10);
//   console.log(num)

//   if(num == gnum) {
//     console.log('matched!')
//   } else {
//     console.log('try again')
//   }
// }

// randomGame();


// function area(a, b) {
//   let result = a * b / 2
//   console.log(result) 
// }

// area(4, 8);

// check if a year is a leapyear in the gregorian calendar
//this just uses truthy falsy to determine whether a year is a leap year. 

// function leapYear(year) {
//   return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);
// }

// console.log(leapYear(2016))

// january 1st is sunday between 2014 - 2050
// first we wanna loop through the years and create a date object of the current year (the year of that iteration)
// check if jan 1st is on a sunday where sunday is = to 0 index.

// function sunday() {
//   for (year = 2014; year <= 2050; year++) {
//     const day = new Date(year, 0, 1);

//     if (day.getDay() === 0) {
//       console.log(`january 1st on sunday lands on this year: ${year}`)
//     }
//   }
// }
// //you dont need to console log the sunday!
// sunday();

//display todays date
// const today = new Date;

// const day = today.getDay();

// const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// console.log('Today is: ' + weekDays[day]);

// let hour = today.getHours();
// let minute = today.getMinutes();
// let seconds = today.getSeconds();

// let prepand = (hour >= 12) ? 'pm' : 'am';

// hour = (hour >= 12) ? hour - 12 : hour;

// if(hour === 0 && prepand === 'pm') {
//   if(minute === 0 && seconds === 0) {
//     hour = 12;
//     prepand = 'Noon';
//   } else {
//     hour = 12;
//     prepand = 'pm'
//   }
// }

// if(hour === 0 && prepand === 'am') {
//   if(minute === 0 && seconds === 0) {
//     hour = 12;
//     prepand = 'midnight'
//   } else {
//     hour = 12;
//     prepand = 'am';
//   }
// }

// console.log('current time: ' + hour + prepand + ' : ' + minute + ' : ' + seconds)

//async function takes a call back and invokes it after a delay of 2 seconds. 
// function asyncFn(callback) {
//   setTimeout(callback, 2000)
// }

// function delay() {
//   console.log('message displayed after two seconds!')
// }

// asyncFn(delay);


// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//     console.log(`name: ${name}, hourly rate: ${salary}`) 
//   }

//   calculateSalary() {
//     let weekly = this.salary * 40;
//     console.log(weekly * 52)
//   }
// }

// class Manager extends Employee {
//   constructor(name, salary, department) {
//     super(name, salary)
//     this.department = department;
//     console.log(`name: ${name}, salary: ${salary}, Department: ${department}`) 
//   }
//   calculateSalary() {
//     let bonus = 10000;
//     console.log(this.salary + bonus);
//   }
// }

// const Banet = new Employee('Banet', 20);
// Banet.calculateSalary();
// const Vanessa = new Manager('vanessa', 20000, 'IT')
// Vanessa.calculateSalary();



// console.log(bike.gears)
// console.log(bike.currentGear)
// bike.changeGear('up', 6)
// console.log(bike.currentGear)


//js program to create class called person that takes name, age, country 
//include method to display persons details

// class Person {
//   constructor(name, age, country) {
//     this.name = name,
//     this.age = age;
//     this.country = country;
//   }

//   displayDetails() {
//     console.log(` Details: ${this.name}, ${this.age}, ${this.country},`)
//   }
// }

// const Vanessa = new Person('vanessa', '24', 'united states')
// Vanessa.displayDetails()


//rectangle class / object - width height prop - methods for area and perimeter

// class Rectangle {
//   constructor(width, height) {
//     this.width = width,
//     this.height = height
//   }
//   findArea() {
//     let result = this.width * this.height;
//     console.log(`Area: ${result}`)
//   }
//   findPerimeter() {
//     let result = this.width + this.height;
//     console.log(`Perimeter: ${result}`)
//   }
// }

// const Rectangle1 = new Rectangle(4, 8);
// Rectangle1.findArea();
// Rectangle1.findPerimeter();

//vehicle
//make model and year - subclass for car that overides display fn for amount of doors.
//class child extends parent

// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   displayDetails() {
//     console.log(`Details: ${this.make}, ${this.model}, ${this.year}`)
//   }
// } 

// class Car extends Vehicle {
//   constructor(make, model, year, doors) {
//     super(make, model, year)
//     this.doors = doors;
//   }
//   displayDetails() {
//     console.log(`Make: ${this.make}, 'Model:' ${this.model}, 'Year:' ${this.year}, 'Doors:' ${this.doors}`)
//   }
// }

// const vehicle1 = new Vehicle('subaru', 'some model', '2024')
// vehicle1.displayDetails();
// const car1 = new Car('porsche', '911', '2008', 2)
// car1.displayDetails();

//Bank Account
//account number and balance (generate a random number for aN)
//withdraw and deposit money
//dont forget the methods can have their own parameters - to be able to add or subtract in the methods, you can pass the amount into the methods. when you call the method, youd pass the amount you want!

// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     this.balance -= amount
//   }

//   displayDetails() {
//     console.log(this.balance)
//   }
// }
// const vanessa = new BankAccount(1234, 5000)
// vanessa.deposit(400)
// vanessa.displayDetails();
// vanessa.deposit(500);
// vanessa.displayDetails();
// vanessa.withdraw(1000);
// vanessa.displayDetails();


//Shape
//method to calculate area
//two subclasses - circle and triangle that inheret shape and override area method
//

// class Shape {
//   area() {
//     throw new Error('method must be overidden')
//   }
// }

// class Triangle extends Shape {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }

//   area() {
//     return this.base * this.height / 2;
//   }
// }

// const triangle1 = new Triangle(4, 12)
// const triangleArea = triangle1.area()
// console.log(`triangle area ${triangleArea}`)




//function fizzBuzz() {
//   for (var i = 1; i < 10; i++) {
//      if (i % 3 == 0) {
//          console.log("fizz")
//      } else if (i % 5 == 0) {
//         console.log('buzz')
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log('fizzbuzz')
//     } else {
//         console.log(i)
//      }
//  }
//}

//fizzBuzz()



//function fizzBuzz(n) {
//   for (let i = 0; i<=n ; i++) {
//       if ((i % 3) === 0 && i % (5 === 0)){
//           console.log('fizzBuzz')
//       } else if (i % 5 == 0) {
//       } else if (i % 3 == 0) {
//          console.log('fizz')
//      } else {
//          console.log(i)
//     }
//    }
//}

//fizzBuzz(20)
//function palindrome(x) {
//  const num = x
//   toletter = num.toString();
//  numarray = [...toletter]
//  reversearray = numarray.reverse();
//    joined = reversearray.join();
//  parseFloat(joined)
//  console.log(joined)

//  if (reversearray == joined) {
//      console.log(true)
//  } else if (reversearray !== joined) {
//      console.log(false)
//   } else {
//      console.log(num)
//   }
//}


//function palindrome(x) {
//   num = parseFloat(x.toString().split('').reverse().join(''))
// if (num === x) {
//      console.log(true)
//  } else if (num !== x) {
//    console.log(false)
// } else {
//  console.log(num)
//}
//}

//palindrome(-101)

//function checker(a, n) {
//    let string = a;
//    let index = n;
//    console.log(string.charAt(index));
//}

//checker('whattheheck', 4);

//function slice(a) {
//    let string = a;
//    console.log(string.slice(3))
//}

//slice('hellloooo')

//function slice(a) {
//    let string = a;
//   console.log(string.slice(-3))
//}

//slice('world')

//function checker(a) {
//    let string = a;
//    console.log(string.indexOf('is'));
//}

//checker('risky')

///function firstHalf(a) {
//    let string = a;
//   if(string.length % 2 == 0) {
//       console.log(string.slice(0,string.length / 2));
//   } else {
//       console.log(string)
//   }
//}

//firstHalf('eveneven')

//function lastThree(a) {
//   let string = a;
//  console.log(string.slice(0, -3))
//}

//lastThree('HelloWorld')

//function percent(x, y) {
//    const div = y / x;
//    const result = Math.floor(div * 100);
//   console.log(`${result} percent of ${x} is ${y}`)
//}

//percent(45, 13)

//function checker(a, b) {
//    if (a.includes(b)) {
//        console.log(b + a)
//   } else {
//       console.log(a + b)
//   }
///}

//checker('lips', 's')

//function even(a) {
//  if( a % 2 == 0) {
//       console.log(true)
//   } else {
//       console.log(false)
// }
//}

//even(11)



//function timeOfDay(time) {
//    if (time >= 12 && time <= 24) {
 //       console.log('afternoon to evening')
//    }
//    if (time >= 0 && time <= 11) {
//        console.log('morning to afternoon')
 //   } 
//    else {
   //     console.log('not a valid time')
 //   }
//}

//timeOfDay(5)
//

//let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

//for (let i = 0; i < iceCreamFlavors.length; i++) {
//    console.log(iceCreamFlavors[i])
//}

//const flavor = iceCreamFlavors.map((element) => element + ' flavor')

//console.log(flavor)