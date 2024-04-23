// [방법1]
// import { perfectScore, sum, avg } from './math.js';

// console.log('perfectScore: ', perfectScore)
// console.log('sum: ', sum(80,10))
// console.log('avg: ', avg(20,40))


// [방법2]
// import * as math from './math.js';
// console.log('perfectScore: ', math.perfectScore)
// console.log('sum: ', math.sum(80,10))
// console.log('avg: ', math.avg(20,40))


// [방법3]
// import { perfectScore, sum, avg } from "./math.js"
// import subtract from './math.js';

// console.log('perfectScore: ', perfectScore)
// console.log('sum: ', sum(80,10))
// console.log('avg: ', avg(20,40))
// console.log('subtract: ', subtract(50,25))

// [방법4]
import math from "./math.js";

console.log('perfectScore: ', math.perfectScore)
console.log('sum: ', math.sum(80,10))
console.log('avg: ', math.avg(20,40))
console.log('subtract: ', math.subtract(50,25))