// [index에서 방법1, 방법2에서 사용]
// exports.perfectScore = 100;

// exports.sum = function(num1, num2) {
//     return num1 + num2;
// };

// exports.avg = function (score1, score2) {
//     return (score1 + score2)/2;
// };

// exports.subtract = (num1,num2) => {
//     return num1 -num2;
// };


// [방법3]
// const math = {};
// math.perfectScore = 100;

// math.sum = function(num1, num2) {
//     return num1 + num2;
// };

// math.avg = function (score1, score2) {
//     return (score1 + score2)/2;
// };

// math.subtract = (num1,num2) => {
//     return num1 -num2;
// };

// module.exports = math;


// [방법4]
const perfectScore = 100;

const sum = function(num1, num2) {
    return num1 + num2;
};

const avg = function (score1, score2) {
    return (score1 + score2)/2;
};

const subtract = (num1,num2) => {
    return num1 -num2;
};

module.exports = {
    perfectScore,
    sum,
    avg,
    subtract,
};