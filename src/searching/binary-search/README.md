# Binary Search

Binary Search is an efficient algorithm for finding an item in a sorted array. It works by repeatedly dividing the search interval in half. If the target value is less than the middle item of the interval, it continues to search in the lower half of the interval, and vice versa for the upper half. This process continues until the target item is found or the search interval is empty.

This functions returns the index of the item, or `-1` if it was not found.

## Usage

```typescript
import { binarySearch } from "functional-algos";

const arr = ["apple", "banana", "cherry", "date", "elderberry"];
binarySearch(arr, "cherry"); // 2
```

## Example

Consider a sorted array of strings: `["apple", "banana", "cherry", "date", "elderberry"]`.

Let's say we are searching for the string `cherry`.

1. Start with the entire array. The middle element is `cherry`.
2. The target value `cherry` is equal to the middle element, so we return the index of the middle element, which is `2`.

If we were searching for the string `fig` instead, the search would go like this:

1. Start with the entire array. The middle element is `cherry`.
2. The target value `fig` is greater than the middle element `cherry`, so we discard the lower half of the array and continue to search in the upper half: `["date", "elderberry"]`.
3. Now the middle element is `date`. The target value `fig` is greater than `date`, so we discard `date` and continue to search in the remaining part of the array: `["elderberry"]`.
4. The middle (and only) element now is `elderberry`. The target value `fig` is less than `elderberry`, so we discard `elderberry` and are left with an empty array. This means the target value `fig` is not in the original array, so we return `-1`.

Binary Search is a highly efficient searching algorithm with a time complexity of O(log n), where n is the number of elements in the array.

### Even-length arrays

When the array length is even, there is no single middle element. Instead, there are two elements in the middle. This implementation opts to use the lower index of the two.
