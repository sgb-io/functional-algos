import type { SortComparator } from "../../data-structures/graph";

export function bucketSort(
  arr: number[],
  bucketSize: number = 5,
  comparator: SortComparator<number> = (a, b) => a - b
): number[] {
  if (arr.length === 0) {
    return arr;
  }

  // Determine minimum and maximum values
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Initialize buckets
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  // Sort buckets and gather them back into original array
  return buckets.reduce((result, bucket) => {
    return result.concat([...bucket].sort(comparator));
  }, []);
}
