# Bucket Sort

Bucket Sort is a distribution-based sorting algorithm. It works by distributing the elements of an array into a number of buckets and then sorting these buckets individually. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.

Bucket Sort is mainly useful when the input is uniformly distributed over a range. Its performance greatly depends on the distribution of the input data, the chosen bucket size, and the sorting algorithm used to sort individual buckets.

Bucket Sort is not a comparison-based sorting algorithm and is typically applied to lists of numbers where the range of the data is known ahead of time. This is because Bucket Sort relies on splitting the data into several ranges (buckets) and then sorting these ranges independently. Applying Bucket Sort to more complex data types like strings or objects would require a defined mechanism for distribution into buckets, which might not be straightforward.

## Usage

```typescript
import { bucketSort } from "functional-algos";

const numbers = [2, 1, 3, 5, 7];
const sortedNumbers = bucketSort(numbers);
```

## Examples

```typescript
const numbers = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const sortedNumbers = bucketSort(numbers); // [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```
