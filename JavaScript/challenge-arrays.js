"use strict";

const bills = [125, 555, 44];
let total = 0;

for (let bill of bills) {
  const tip = bill <= 30 ? bill * 0.15 : bill * 0.2;
  const finalAmount = bill + tip;

  console.log(`Bill + tip: ${finalAmount}`);

  total += finalAmount; // add to total
}

console.log("Total of all bills + tips:", total);
