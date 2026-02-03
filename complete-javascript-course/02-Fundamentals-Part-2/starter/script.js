"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriverLicense = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function fruitProcessor(apples, oranges) {
//   console.log(oranges, apples);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// for (let appleJuice = 1; appleJuice <= 3; appleJuice++) {
//   console.log(`I drinks ${appleOrangeJuice}`);
// }

// function decoration
// function calcAge1(birthdYear) {
//   return 2037 - birthdYear;
// }

// const age1 = calcAge1(1832);
// console.log(age1);

// function expression
// const calcAge2 = function (birthdYear) {
//   return 2037 - birthdYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// arrow function

// const calkAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calkAge3(1991);
// console.log(age3);

// const yaerUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires is ${retirement}`;
// };
// console.log(yaerUntilRetirement(1989, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);
//   console.log(oranges, apples);
//   const juice = `Juice with ${applePieces} piaces of apples and ${orangesPieces} piaces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthdYear) {
//   return 2037 - birthdYear;
// };

// const yaerUntilRetirement = function (birthdYear, firstName) {
//   const age = calcAge(birthdYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🍕`);
//     return -1;
//   }
// };

// console.log(yaerUntilRetirement(1991, "Bob"));
// console.log(yaerUntilRetirement(1970, "Mike"));

// Array
// const friends = ["Michael", "Tyler", "Joe", "Silvia"];

// console.log(friends.indexOf("Tyler"));

// for (let i = 3; i < 2; i++) {
//   const result = friends.shift();
//   console.log(`Removed: ${result}`);
//   console.log(`We're keeps only: ${friends}`);
// }

// for (let i = 0; i < 2; i++) {
//   const result = friends.pop();
//   console.log(`Removed: ${result}`);
//   console.log(`We're keeps only: ${friends}`);
// }

// let input = prompt("Enter bill amount: ");
// while (!/^\d+(\.\d+)?$/.test(input)) {
//   input = prompt("Digits only. Enter bill amount: ");
// }
// const bill = Number(input);
// console.log(`Bill: ${bill}`);

// const bills = [125, 555, 44];
// let total = 0;

// for (let bill of bills) {
//   const tip = bill <= 30 ? bill * 0.15 : bill * 0.2;
//   const finalAmount = bill + tip;

//   console.log(`Bill + tip: ${finalAmount}`);

//   total += finalAmount; // add to total
// }

// console.log("Total of all bills + tips:", total);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
}
