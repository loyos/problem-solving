/**
 * https://leetcode.com/problems/search-insert-position/?envType=study-plan-v2&envId=top-interview-150
 */

const binarySearch = require("./binary-search");

describe("Binary Search", () => {
  test("test case 1", () => {
    expect(binarySearch([1, 3, 5, 6], 5)).toBe(2);
  });

  test("test case 2", () => {
    expect(binarySearch([1, 3, 5, 6], 2)).toBe(1);
  });

  test("test case 3", () => {
    expect(binarySearch([1, 3, 5, 6], 7)).toBe(4);
  });
});
