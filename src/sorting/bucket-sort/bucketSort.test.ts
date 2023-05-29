import { bucketSort } from "./bucketSort";

describe("bucketSort", () => {
  test("sorts an empty array", () => {
    expect(bucketSort([])).toEqual([]);
  });

  test("sorts an array with one element", () => {
    expect(bucketSort([5])).toEqual([5]);
  });

  test("sorts an array with two elements", () => {
    expect(bucketSort([6, 2])).toEqual([2, 6]);
  });

  test("sorts an array with multiple elements", () => {
    expect(bucketSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  test("sorts an array with duplicate elements", () => {
    expect(bucketSort([2, 2, 2, 1, 1, 1])).toEqual([1, 1, 1, 2, 2, 2]);
  });

  test("does not mutate the original array", () => {
    const arr = [5, 3, 8, 4, 2];
    const copy = [...arr];
    bucketSort(arr);
    expect(arr).toEqual(copy);
  });
});
