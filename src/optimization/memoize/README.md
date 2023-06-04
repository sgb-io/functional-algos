# Memoize

Memoization is a technique used to optimize functions by caching their results based on the input arguments. By storing and reusing computed results, memoization reduces redundant computations and improves the performance of functions, especially those with expensive calculations or I/O operations.

There are 2 memoize functions available:

- `memoizeOne` - Only memoizes the last result. At most keeps 1 result in memory.
- `memoize` - Memoizes all results. Continues to use up memory as different arguments are passed.

## Usage

```typescript
import { memoizeOne, memoize } from "functional-algos";

function add(a: number, b: number) {
  return a + b;
}

// Use as desired
const memoizedOnce = memoizeOne(add);
const memoized = memoize(add);
```

## Examples

Simple use of `memoizeOne`:

```typescript
let numCalls = 0;
const add = (a: number, b: number) => {
  numCalls += 1;
  return a + b;
};
const memoizedAdd = memoizeOne(add);

memoizedAdd(1, 2);
memoizedAdd(1, 2);
// numCalls = 1

memoizedAdd(2, 3);
memoizedAdd(2, 3);
// numCalls = 2

memoizedAdd(1, 2);
// numCalls = 3 (this would be 2 if using `memoize`)
```

More complex arguments, including functions (`memoizeOne`):

```typescript
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
// numAddCalls = 1, numThingCalls = 1
expect(numAddCalls).toBe(1);
expect(numThingCalls).toBe(1);

// New functions used in args - memoization won't happen
memoizedAdd(1, 2, () => {});
memoizedAdd(1, 2, () => {});
// numAddCalls = 3, numThingCalls = 1
```

Memoize _n_ calls (`memoize`):

```typescript
let numCalls = 0;
const add = (a: number, b: number) => {
  numCalls += 1;
  return a + b;
};
const memoizedAdd = memoize(add);

memoizedAdd(1, 2);
memoizedAdd(1, 2);
// numCalls = 1

memoizedAdd(2, 3);
memoizedAdd(2, 3);
// numCalls = 2

memoizedAdd(1, 2);
memoizedAdd(2, 3);
// numCalls = 2
```
