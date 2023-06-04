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
});

// function doFancyThing(a: number, b: () => void) {
//   const result = b();
//   console.log('doFancyThing!', a, result);
// }

// function doNothing(foo?: number) {
//   if (foo) {
//     console.log('You provided an arg!');
//   } else {
//     console.log('Nothing happened');
//   }
// }

// const memoizedAdd = memoize(add);
// const memoizedFancyThing = memoize(doFancyThing);
// const memoizedDoNothing = memoize(doNothing);

// // console.log(memoizedAdd(1, 2));
// // console.log(memoizedAdd(1, 2));

// // console.log(memoizedAdd(2, 3)); // result: 5 - [add function: is called]
// // console.log(memoizedAdd(2, 3)); // result: 5 - [add function: is not called]

// // console.log(memoizedAdd(1, 2)); // result: 3 - [add function: is called]

// function doFoo() {
//   return 'foo';
// }

// console.log(memoizedFancyThing(5, doFoo));
// console.log(memoizedFancyThing(5, doFoo));
// console.log(memoizedFancyThing(5, doFoo));
// console.log(memoizedFancyThing(5, doFoo));
// console.log(memoizedFancyThing(5, doFoo)); // should not log out

// // console.log(JSON.stringify([memoizedAdd]));
// console.log(memoizedDoNothing());
// console.log(memoizedDoNothing());
