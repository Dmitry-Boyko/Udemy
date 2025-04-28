const fs = require('fs')
const dns = require('dns')

const timeInfo = (text) => { 
  console.log(text, performance.now().toFixed(2) )
}

console.log('Program start')
// Timeout events
setTimeout(() => timeInfo('Timeout 1', ), 0)
setTimeout(() => {
  process.nextTick(() => timeInfo('Next tick 2'))
  timeInfo('Timeout 2')
}, 100)
// Close event
fs.writeFile('./test.txt', 'Hello Node.js', () => timeInfo('File written'))
// Promise event
Promise.resolve().then(() => timeInfo('Promise 1'))
// Next Tick event
process.nextTick(() => timeInfo('Next tick 1'))
// Set Immidiate event (Check)
setImmediate(() => timeInfo('Immidiate 1'))
// Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
  timeInfo(`Interval ${intervalCount += 1}`)
  if (intervalCount === 2) clearInterval(intervalId)
}, 50)
// I/O Events
dns.lookup('google.com', (err, address, family) => {
  timeInfo('DNS 1 Google', address)
  Promise.resolve().then(() => timeInfo('Promise 2'))
  process.nextTick(() => timeInfo('Next tick 3'))
})

console.log('Program end')