// It is a module system created to use Javascript module in NodeJS environment. NodeJS환경에서 자바스크립트 모듈을 사용하기 위해 만들어진 모듈 시스템이다. 
// NodeJS basically uses the CommonJS module system, and as official support for the ES module system begins with NodeJS version 13.2, 
// it is easy to use the ES module in NodeJS without other tools.

//exports. module.exports ------- require

// [방법1]
// const {perfectScore, sum, avg, subtract} = require('./math.js');

// console.log('perfectScore: ', perfectScore)
// console.log('sum: ', sum(80,10))
// console.log('avg: ', avg(20,40))
// console.log('subtract: ', subtract(50,25))


// [방법2]
// const math = require('./math.js');

// console.log('perfectScore: ', math.perfectScore)
// console.log('sum: ', math.sum(80,10))
// console.log('avg: ', math.avg(20,40))
// console.log('subtract: ', math.subtract(50,25))


// [방법3]
// const math = require('./math.js');

// console.log('perfectScore: ', math.perfectScore)
// console.log('sum: ', math.sum(80,10))
// console.log('avg: ', math.avg(20,40))
// console.log('subtract: ', math.subtract(50,25))


// [방법4]
const math = require('./math.js');

console.log('perfectScore: ', math.perfectScore)
console.log('sum: ', math.sum(80,10))
console.log('avg: ', math.avg(20,40))
console.log('subtract: ', math.subtract(50,25))