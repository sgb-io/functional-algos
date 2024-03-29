import type { SortComparator } from "../../data-structures/graph";

export function quickSortRecursive<T>(
  arr: T[],
  comparator: SortComparator<T> = (a, b) => <any>a - <any>b
): T[] {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = arr.filter((value) => comparator(value, pivot) < 0);
  const middle = arr.filter((value) => comparator(value, pivot) === 0);
  const right = arr.filter((value) => comparator(value, pivot) > 0);

  return [
    ...quickSortRecursive(left, comparator),
    ...middle,
    ...quickSortRecursive(right, comparator),
  ];
}
