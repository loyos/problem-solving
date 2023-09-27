/**
 * https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150
 */

function isPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) return false;
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
