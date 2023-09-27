/**
 * https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150
 */

function threeSum(nums) {
  let dict = {};
  nums.sort((a, b) => a - b);
  result = [];

  let left, right;
  for (let i = 0; i < nums.length - 1; i++) {
    left = i + 1;
    right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        let index = `${nums[i]}-${nums[left]}-${nums[right]}`;
        if (!dict[index]) {
          result.push([nums[i], nums[left], nums[right]]);
          dict[index] = 1;
        }
      }
      if (sum > 0) right--;
      else left++;
    }
  }

  return result;
}

module.exports = threeSum;
