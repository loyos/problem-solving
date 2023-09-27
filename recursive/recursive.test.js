const fibOpt = require("./fibonacciOptimized");
const fib = require("./fibonacci");

describe("Fibonacci Optimized test cases", () => {
  test("f(10)", () => {
    expect(fibOpt(10)).toBe(55);
  });

  test("f(19)", () => {
    expect(fibOpt(19)).toBe(4181);
  });

  test("f(13)", () => {
    expect(fibOpt(13)).toBe(233);
  });

  test("f(40)", () => {
    expect(fib(40)).toBe(102334155);
  });
});

describe("Fibonacci test cases", () => {
  test("f(10)", () => {
    expect(fib(10)).toBe(55);
  });

  test("f(19)", () => {
    expect(fib(19)).toBe(4181);
  });

  test("f(13)", () => {
    expect(fib(13)).toBe(233);
  });

  test("f(40)", () => {
    expect(fib(40)).toBe(102334155);
  });
});
