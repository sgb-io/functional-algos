# Selection Sort

Selection Sort is a simple comparison-based sorting algorithm. The main idea behind the algorithm is to divide the input into a sorted and an unsorted region. The sorted region is built up from left to right at the front of the array.

Each step of Selection Sort involves finding the smallest (or largest, depending on sorting order) element in the unsorted array and swapping it with the leftmost unsorted element, moving the boundary between these two regions one element to the right.

## Usage

```typescript
import { selectionSort } from "functional-algos";

const numbers = [2, 4, 7, 1, 5, 6];
const sortedNumbers = selectionSort(numbers);
```

## Examples

Number arrays

```typescript
const numbers = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const sortedNumbers = selectionSort(numbers); // [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

String arrays

```typescript
const words = ["apple", "banana", "cherry", "apple"];
const stringComparator = (a: string, b: string) => a.localeCompare(b);
const sortedWords = selectionSort(words, stringComparator); // ["apple", "apple", "banana', "cherry"]
```

Object/complex arrays

```typescript
const arr = [{ value: 5 }, { value: 2 }, { value: 9 }, { value: 1 }];
const comparator = (a: { value: number }, b: { value: number }) =>
  a.value - b.value;
const sortedObjects = selectionSort(arr, comparator);
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
