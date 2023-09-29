/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=study-plan-v2&envId=top-interview-150
 */

var letterCombinations = function (digits) {
  let result = [];

  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  digits = digits.split("");

  back(digits, "");

  function back(digits, current) {
    if (digits.length < 1) {
      if (current) result.push(current);
      return;
    }
    const chars = map[digits[0]];
    for (const char of chars) {
      let aux = current + char;
      back(digits.slice(1), aux);
    }
  }
  return result;
};

module.exports = letterCombinations;
