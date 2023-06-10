import { fib } from "./fib";

describe("fib", () => {
  test("throws an error for non-positive input", () => {
    expect(() => fib(0)).toThrow("Input must be a positive integer.");
    expect(() => fib(-1)).toThrow("Input must be a positive integer.");
  });

  test("computes small Fibonacci numbers", () => {
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
    expect(fib(5)).toEqual(5);
  });

  test("computes larger Fibonacci numbers", () => {
    expect(fib(10)).toEqual(55);
    expect(fib(20)).toEqual(6765);
  });
});
