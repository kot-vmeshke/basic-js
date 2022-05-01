const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let strN = n.toString();
    let arrN = [];
    for (let i = 0; i < strN.length; i++) {
      arrN.push(+strN[i]);
    }
    let sum = 0;
    for (let i = 0; i < arrN.length; i++) {
      sum += arrN[i];
    }
  if (sum < 10) {
    return sum;
  } else {
    return getSumOfDigits(sum);
  }
} 

module.exports = {
  getSumOfDigits
};
