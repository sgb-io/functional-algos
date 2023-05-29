# Merge Sort

Merge Sort is an efficient, general-purpose sorting algorithm based on the divide-and-conquer paradigm. It works by dividing the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

This function returns the sorted array.

By default, values are compared like numbers, but you can provide an optional `comparator` when working with an array of different types.

## Usage

Here's a basic usage example in TypeScript:

```typescript
import { mergeSort } from "functional-algos";

const numbers = [3, 5, 2, 1, 4];
const sortedNumbers = mergeSort(numbers);
```

## Examples

Number arrays

```typescript
const numbers = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const sortedNumbers = mergeSort(numbers); // [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

String arrays

```typescript
const words = ["apple", "banana", "cherry", "apple"];
const stringComparator = (a: string, b: string) => a.localeCompare(b);
const sortedWords = mergeSort(words, stringComparator); // ["apple", "apple", "banana", "cherry"]
```

Object/complex arrays

```typescript
const arr = [
  { name: "Tom", age: 25 },
  { name: "Jerry", age: 30 },
  { name: "Spike", age: 20 },
];


const ageComparator = (
  a: { name: string; age: number },
  b: { name: string; age: number }
) => a.age - b.age;

const sortedObjects = mergeSort(arr, ageComparator);

/*
Result:
[
  { name: "Spike", age: 20 },
  { name: "Tom", age: 25 },
  { name: "Jerry", age: 30 },
];
/*
```
