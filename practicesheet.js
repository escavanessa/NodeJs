
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
// }


// console.log(bike.gears)
// console.log(bike.currentGear)
// bike.changeGear('up', 6)
// console.log(bike.currentGear)


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