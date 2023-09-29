/**
 * https://leetcode.com/problems/permutations/description/?envType=study-plan-v2&envId=top-interview-150
 */

var permute = function (nums) {
  nums = nums.join(",").toString().split(",");
  let result = [];

  back([], nums);

  function back(current, numbers) {
    if (numbers.length == 1) {
      current.push(numbers[0]);
      result.push(current.map((n) => Number(n)));
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      let aux = [...numbers];
      aux.splice(i, 1);
      back([...current, numbers[i]], aux);
    }
  }
  return result;
};

module.exports = permute;
