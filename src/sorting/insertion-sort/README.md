# Insertion Sort

Insertion Sort is a simple, comparison-based sorting algorithm. It works by building a sorted portion of the array one item at a time. This is done by taking each element in the array and "inserting" it into its correct position in the already sorted portion of the array.

The algorithm starts from the second element, considering one element alone as a sorted list. Each subsequent element is inserted into the sorted list by comparing with all the elements in the sorted list and shifting those elements that are greater to one position ahead.

## Usage

```typescript
import { insertionSort } from "functional-algos";

const numbers = [3, 7, 2, 1, 3, 5];
const sortedNumbers = insertionSort(numbers);
```

## Examples

Number arrays

```typescript
const numbers = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const sortedNumbers = insertionSort(numbers); // [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

String arrays

```typescript
const words = ["apple", "banana", "cherry", "apple"];
const stringComparator = (a: string, b: string) => a.localeCompare(b);
const sortedWords = insertionSort(words, stringComparator); // ["apple", "apple", "banana", "cherry"]
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

const sortedObjects = insertionSort(arr, ageComparator);

/*
Result:
[
  { name: "Spike", age: 20 },
  { name: "Tom", age: 25 },
  { name: "Jerry", age: 30 },
];
/*
```
