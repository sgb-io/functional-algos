export function mergeSort<T>(
  arr: T[],
  comparator: (a: T, b: T) => number = (a, b) => <any>a - <any>b
): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left, comparator),
    mergeSort(right, comparator),
    comparator
  );
}

function merge<T>(
  left: T[],
  right: T[],
  comparator: (a: T, b: T) => number
): T[] {
  let resultArray: T[] = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (comparator(left[leftIndex], right[rightIndex]) <= 0) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
