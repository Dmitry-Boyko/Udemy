const fs = require('fs')
const dns = require('dns')

const timeStamp = () =>  performance.now().toFixed(2)

console.log('Program start')
// Timeout events
setTimeout(() => console.log('Timeout 1', timeStamp()), 0)
setTimeout(() => {
  process.nextTick(() => console.log('Next tick 2', timeStamp()))
  console.log('Timeout 2', timeStamp())
}, 10)
// Close event
fs.writeFile('./test.txt', 'Hello Node.js', () => console.log('File written', timeStamp()))
// Promise event
Promise.resolve().then(() => console.log('Promise 1', timeStamp()))
// Next Tick event
process.nextTick(() => console.log('Next tick 1', timeStamp()))
// Set Immidiate event (Check)
setImmediate(() => console.log('Immidiate 1', timeStamp()))
// I/O Events
dns.lookup('google.com', (err, address, family) => {
  console.log('DNS 1 Google', address, timeStamp())
  Promise.resolve().then(() => console.log('Promise 2', timeStamp()))
  process.nextTick(() => console.log('Next tick 3', timeStamp()))
})

console.log('Program end')