
// console.log('Hello from NoneJS');

const fs = require('fs');
fs.writeFileSync('hello.txt', 'hello Node JS')

const name = 'Max';
let age = 20;

function summar(name, age) {
  return 'Name is ' + name + ', age is ' + age
}

console.log(summar(name, age))

const person = {
  name: 'Maxi',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();
