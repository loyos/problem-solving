const palindrome = require("./palindrome");
const threeSums = require("./threeSums");
const containerMaxArea = require("./containerMaxArea");

describe("Valid Palindrome", () => {
  test("test case 1", () => {
    expect(palindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("test case 2", () => {
    expect(palindrome("race a car")).toBe(false);
  });

  test("test case 3", () => {
    expect(palindrome(" ")).toBe(true);
  });
});

describe("threeSums", () => {
  test("test case 1", () => {
    expect(threeSums([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("test case 2", () => {
    expect(threeSums([0, 1, 1])).toStrictEqual([]);
  });

  test("test case 3", () => {
    expect(threeSums([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
  });
});

describe("containerMaxArea", () => {
  test("test case 1", () => {
    expect(containerMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test("test case 2", () => {
    expect(containerMaxArea([1, 1])).toStrictEqual(1);
  });
});
