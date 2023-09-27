/**
 https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150
 */

var wordPattern = function (pattern, s) {
  let dict = {};
  s = s.split(" ");

  if (s.length != pattern.length) return false;

  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    let pat = pattern[i];
    if (!dict[pat]) {
      if (Object.values(dict).includes(word)) return false;
      dict[pat] = word;
    } else {
      if (dict[pat] != word) return false;
    }
  }

  return true;
};

module.exports = wordPattern;
