import type { SortComparator } from "../../data-structures";

export function quickSort<T>(
  arr: T[],
  comparator: SortComparator<T> = (a, b) => <any>a - <any>b
): T[] {
  const stack = [];
  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.length) {
    const hi = stack.pop() as number;
    const lo = stack.pop() as number;
    if (lo >= hi) continue;

    const p = partition(arr, lo, hi, comparator);

    stack.push(lo);
    stack.push(p - 1);

    stack.push(p + 1);
    stack.push(hi);
  }

  return arr;
}

function partition<T>(
  arr: T[],
  lo: number,
  hi: number,
  comparator: SortComparator<T>
): number {
  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (comparator(arr[j], pivot) < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
      i++;
    }
  }
  [arr[i], arr[hi]] = [arr[hi], arr[i]]; // swap
  return i;
}
