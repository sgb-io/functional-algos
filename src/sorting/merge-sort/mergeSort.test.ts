import { mergeSort } from "./mergeSort";

describe("mergeSort", () => {
  test("sorts an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("sorts an array with one element", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test("sorts an array with two elements", () => {
    expect(mergeSort([6, 2])).toEqual([2, 6]);
  });

  test("sorts an array with multiple elements", () => {
    expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  test("sorts an array with duplicate elements", () => {
    expect(mergeSort([2, 2, 2, 1, 1, 1])).toEqual([1, 1, 1, 2, 2, 2]);
  });

  test("does not mutate the original array", () => {
    const arr = [5, 3, 8, 4, 2];
    const copy = [...arr];
    mergeSort(arr);
    expect(arr).toEqual(copy);
  });

  test("sorts an array of objects", () => {
    const arr = [
      { name: "Tom", age: 25 },
      { name: "Jerry", age: 30 },
      { name: "Spike", age: 20 },
    ];
    const sortedArr = [
      { name: "Spike", age: 20 },
      { name: "Tom", age: 25 },
      { name: "Jerry", age: 30 },
    ];

    const ageComparator = (
      a: { name: string; age: number },
      b: { name: string; age: number }
    ) => a.age - b.age;

    expect(mergeSort(arr, ageComparator)).toEqual(sortedArr);
  });
});
