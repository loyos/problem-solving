/**
 * https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
 */

var canConstruct = function (ransomNote, magazine) {
  const dict = {};
  for (const char of magazine) {
    dict[char] ? dict[char]++ : (dict[char] = 1);
  }

  for (const char of ransomNote) {
    if (dict[char]) dict[char]--;
    else return false;
  }

  return true;
};

module.exports = canConstruct;
