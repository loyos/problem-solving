const letterCombinations = require("./letterCombinations");
const combinations = require("./combinations");
const permute = require("./permutations");

describe("letterCombinations", () => {
  test("test case 1", () => {
    expect(letterCombinations("23")).toStrictEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });

  test("test case 2", () => {
    expect(letterCombinations("")).toStrictEqual([]);
  });

  test("test case 3", () => {
    expect(letterCombinations("2")).toStrictEqual(["a", "b", "c"]);
  });
});

describe("combinations", () => {
  test("test case 1", () => {
    expect(combinations(4, 2)).toStrictEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });

  test("test case 2", () => {
    expect(combinations(1, 1)).toStrictEqual([[1]]);
  });
});

describe("permutations", () => {
  test("test case 1", () => {
    expect(permute([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test("test case 2", () => {
    expect(permute([0, 1])).toStrictEqual([
      [0, 1],
      [1, 0],
    ]);
  });
});
