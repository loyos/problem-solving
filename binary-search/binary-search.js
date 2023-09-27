/**
 * https://leetcode.com/problems/search-insert-position/?envType=study-plan-v2&envId=top-interview-150
 */

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = Math.floor((end - start) / 2);

  while (start <= end) {
    if (nums[index] == target) {
      return index;
    } else if (nums[index] > target) {
      end = index - 1;
    } else {
      start = index + 1;
    }

    index = Math.floor((end + start) / 2);
  }

  return index + 1;
};

module.exports = searchInsert;
