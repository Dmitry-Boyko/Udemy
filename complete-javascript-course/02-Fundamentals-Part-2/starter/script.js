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

const calkAge3 = (birthYear) => 2037 - birthYear;
const age3 = calkAge3(1911);
console.log(age3);

const yaerUntilRetirement = (birthYear) => {
  const age = 2026 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yaerUntilRetirement(1969));
