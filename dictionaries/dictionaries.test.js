const ransomNote = require("./ransomNote");
const wordPattern = require("./wordPattern");

describe("ransomNote", () => {
  test("test case 1", () => {
    expect(ransomNote("a", "b")).toBe(false);
  });

  test("test case 1", () => {
    expect(ransomNote("aa", "ab")).toBe(false);
  });

  test("test case 1", () => {
    expect(ransomNote("aa", "aab")).toBe(true);
  });
});

describe("wordPattern", () => {
  test("test case 1", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
  });

  test("test case 1", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
  });

  test("test case 1", () => {
    expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
  });
});
