# Heap Sort

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. This algorithm is based on the selection sort principle but optimizes it by using a binary heap to find the maximum element more quickly.

Heap Sort involves building a Max Heap from the input data, then repeatedly deleting the maximum element from the heap and inserting it into an array. Over time, this creates a sorted array in ascending order.

This function returns the sorted array.

By default, values are compared like numbers, but you can provide an optional `comparator` when working with an array of different types.

## Usage

```typescript
import { heapSort } from "functional-algos";

const numbers = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const sortedNumbers = heapSort(numbers);
```

## Examples

Number arrays

```typescript
heapSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

String arrays

```typescript
const arr = ["apple", "banana", "cherry", "apple"];
const stringComparator = (a: string, b: string) => a.localeCompare(b);

heapSort(arr, stringComparator); // "apple", "apple", "banana", "cherry"]
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

heapSort(arr, ageComparator);

/*
Result:
[
  { name: "Spike", age: 20 },
  { name: "Tom", age: 25 },
  { name: "Jerry", age: 30 },
];
*/
```
