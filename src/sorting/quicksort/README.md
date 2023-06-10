# Quicksort

**This is the iterative (default) version of quicksort**. The implementation is more complex than the recursive version, but does not use recursion and therefore does not run into the same stack depth limitations.

Quicksort is a widely used sorting algorithm that operates on the principle of divide-and-conquer. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. Traditionally, the sub-arrays are recursively sorted, but in this implementation, we use an iterative approach with an explicit stack to avoid potential issues with recursion depth.

This function sorts the array in place and returns the sorted array.

By default, values are compared as if they were numbers, but you can provide an optional `comparator` function for custom comparison logic when working with an array of different types or structures.

## Usage

```typescript
import { quickSort } from "functional-algos";

const numbers = [3, 5, 2, 1, 4];
const sortedNumbers = quickSort(numbers);
```

## Examples

Number arrays

```typescript
const numbers = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const sortedNumbers = quickSort(numbers); // [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

String arrays

```typescript
const words = ["apple", "banana", "cherry", "apple"];
const stringComparator = (a: string, b: string) => a.localeCompare(b);
const sortedWords = quickSort(words, stringComparator); // ["apple", "apple", "banana", "cherry"]
```

Object/complex arrays

```typescript
const arr = [{ value: 5 }, { value: 2 }, { value: 9 }, { value: 1 }];
const comparator = (a: { value: number }, b: { value: number }) =>
  a.value - b.value;
const sortedObjects = quickSort(arr, comparator);
/*
  Result:
  [
    { value: 1 },
    { value: 2 },
    { value: 5 },
    { value: 9 },
  ]
*/
```
