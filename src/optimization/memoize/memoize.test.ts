import { memoizeOne } from "./memoizeOne";

describe("memoize", () => {
  test("memoizes a simple function", () => {
    let numCalls = 0;
    const add = (a: number, b: number) => {
      numCalls += 1;
      return a + b;
    };
    const memoizedAdd = memoizeOne(add);
    memoizedAdd(1, 2);
    memoizedAdd(1, 2);
    expect(numCalls).toBe(1);

    memoizedAdd(2, 3);
    memoizedAdd(2, 3);
    expect(numCalls).toBe(2);

    memoizedAdd(1, 2);
    expect(numCalls).toBe(3);
  });

  test("memoizes a function without any arguments", () => {
    let numCalls = 0;
    const doThing = () => {
      numCalls += 1;
    };
    const memoizedDoThing = memoizeOne(doThing);
    memoizedDoThing();
    memoizedDoThing();
    expect(numCalls).toBe(1);
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
    const memoizedAdd = memoizeOne(add);

    // Same function re-used in args
    memoizedAdd(1, 2, doThing);
    memoizedAdd(1, 2, doThing);
    expect(numAddCalls).toBe(1);
    expect(numThingCalls).toBe(1);

    // New functions used in args - memoization won't happen
    memoizedAdd(1, 2, () => {});
    memoizedAdd(1, 2, () => {});
    expect(numAddCalls).toBe(3);
  });
});
