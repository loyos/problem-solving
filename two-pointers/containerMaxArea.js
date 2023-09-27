/**
 * https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=top-interview-150
 */

var maxArea = function (heights) {
  // Initialize the maximum water capacity and the two pointers.
  let maxWater = 0;
  let left = 0;
  let right = heights.length - 1;

  // Iterate until the left and right pointers meet.
  while (left < right) {
    // Calculate the water capacity of the current container.
    let waterCapacity =
      Math.min(heights[left], heights[right]) * (right - left);

    // Update the maximum water capacity if necessary.
    if (waterCapacity > maxWater) {
      maxWater = waterCapacity;
    }

    // Move the pointer that is pointing to the shorter wall.
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  // Return the maximum water capacity.
  return maxWater;
};

module.exports = maxArea;
