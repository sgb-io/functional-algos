type Comparator<T> = (a: T, b: T) => number;

function heapify<T>(
  arr: T[],
  n: number,
  i: number,
  comparator: Comparator<T>
): T[] {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let tempArr = [...arr];

  if (left < n && comparator(tempArr[left], tempArr[largest]) > 0) {
    largest = left;
  }

  if (right < n && comparator(tempArr[right], tempArr[largest]) > 0) {
    largest = right;
  }

  if (largest !== i) {
    [tempArr[i], tempArr[largest]] = [tempArr[largest], tempArr[i]];

    return heapify(tempArr, n, largest, comparator);
  }

  return tempArr;
}

export function heapSort<T>(
  arr: T[],
  comparator: Comparator<T> = (a, b) => <any>a - <any>b
): T[] {
  let n = arr.length;
  let tempArr = [...arr];

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    tempArr = heapify(tempArr, n, i, comparator);
  }

  for (let i = n - 1; i >= 0; i--) {
    [tempArr[0], tempArr[i]] = [tempArr[i], tempArr[0]];
    tempArr = heapify(tempArr, i, 0, comparator);
  }

  return tempArr;
}
