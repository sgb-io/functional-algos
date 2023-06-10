# Quicksort (Recursive)

**This is the recursive version of quicksort**. The implementation is simpler than the iterative (default) version, but it can potentially run into stack depth limitations when working with large data.

Quicksort is a widely used sorting algorithm that is based on the divide-and-conquer principle. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.

This function returns the sorted array.

By default, values are compared like numbers, but you can provide an optional `comparator` when working with an array of different types.

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
