import type { SortComparator } from "../../data-structures/graph";

export function selectionSort<T>(
  arr: T[],
  comparator: SortComparator<T> = (a, b) => <any>a - <any>b
): T[] {
  const tempArr = [...arr];

  for (let i = 0; i < tempArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < tempArr.length; j++) {
      if (comparator(tempArr[j], tempArr[minIndex]) < 0) {
        minIndex = j;
      }
    }
    [tempArr[i], tempArr[minIndex]] = [tempArr[minIndex], tempArr[i]];
  }

  return tempArr;
}
