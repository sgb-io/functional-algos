import type { SortComparator } from "../../data-structures/graph";

export function insertionSort<T>(
  arr: T[],
  comparator: SortComparator<T> = (a, b) => <any>a - <any>b
): T[] {
  const tempArr = [...arr];

  for (let i = 1; i < tempArr.length; i++) {
    let j = i - 1;
    let temp = tempArr[i];

    while (j >= 0 && comparator(tempArr[j], temp) > 0) {
      tempArr[j + 1] = tempArr[j];
      j--;
    }

    tempArr[j + 1] = temp;
  }

  return tempArr;
}
