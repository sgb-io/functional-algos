import { memoize } from "./memoize";

describe("memoize", () => {
  test("memoizes a simple function", () => {
    let numCalls = 0;
    const add = (a: number, b: number) => {
      numCalls += 1;
      return a + b;
    };
    const memoizedAdd = memoize(add);
    memoizedAdd(1, 2);
    memoizedAdd(1, 2);
    expect(numCalls).toBe(1);

    memoizedAdd(2, 3);
    memoizedAdd(2, 3);
    expect(numCalls).toBe(2);

    memoizedAdd(1, 2);
    memoizedAdd(2, 3);
    expect(numCalls).toBe(2);
  });

  test("memoizes a function without any arguments", () => {
    let numCalls = 0;
    const doThing = () => {
      numCalls += 1;
    };
    const memoizedDoThing = memoize(doThing);
    memoizedDoThing();
    memoizedDoThing();
    expect(numCalls).toBe(1);
  });

  test("memoizes a function with object arguments", () => {
    let numCalls = 0;
    const concat = memoize((obj1: object, obj2: object) => {
      numCalls += 1;
      return { ...obj1, ...obj2 };
    });

    const objA = { a: 1 };
    const objB = { b: 2 };

    expect(concat(objA, objB)).toEqual({ a: 1, b: 2 }); // First call, computes and caches the result
    expect(numCalls).toBe(1);

    expect(concat(objA, objB)).toEqual({ a: 1, b: 2 }); // Same arguments, retrieves from cache
    expect(numCalls).toBe(1);

    const objC = { c: 3 };
    const objD = { d: 4 };

    expect(concat(objC, objD)).toEqual({ c: 3, d: 4 }); // Different arguments, computes and caches the result
    expect(numCalls).toBe(2);

    expect(concat(objC, objD)).toEqual({ c: 3, d: 4 }); // Same arguments, retrieves from cache
    expect(numCalls).toBe(2);
  });

  test("memoizes a function with function arguments", () => {
    let numCalls = 0;
    const execute = memoize((fn: () => void) => {
      numCalls += 1;
      fn();
    });

    const mockFn = jest.fn();

    execute(mockFn); // First call, executes the function
    expect(numCalls).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(1);

    execute(mockFn); // Same argument, retrieves from cache, but does not execute the function
    expect(numCalls).toBe(1);
    expect(mockFn).toHaveBeenCalledTimes(1);

    const anotherFn = jest.fn();

    execute(anotherFn); // Different argument, executes the new function
    expect(numCalls).toBe(2);
    expect(anotherFn).toHaveBeenCalledTimes(1);
  });

  test("memoizes a function that accepts mixed arguments including a function", () => {
    let numAddCalls = 0;
    let numThingCalls = 0;

    const doThing = () => {
      numThingCalls += 1;
    };
    const add = (a: number, b: number, c: () => void) => {
      numAddCalls += 1;
      c();
      return a + b;
    };
    const memoizedAdd = memoize(add);

    // Same function re-used in args
    memoizedAdd(1, 2, doThing);
    memoizedAdd(1, 2, doThing);
    expect(numAddCalls).toBe(1);
    expect(numThingCalls).toBe(1);

    // New functions used in args - memoization won't happen
    memoizedAdd(1, 2, () => {});
    memoizedAdd(1, 2, () => {});
    expect(numAddCalls).toBe(3);
    expect(numThingCalls).toBe(1);
  });
});
