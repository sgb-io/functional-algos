import { insertionSort } from "./insertionSort";

describe("insertionSort", () => {
  test("sorts an empty array", () => {
    expect(insertionSort([])).toEqual([]);
  });

  test("sorts an array with one element", () => {
    expect(insertionSort([5])).toEqual([5]);
  });

  test("sorts an array with two elements", () => {
    expect(insertionSort([6, 2])).toEqual([2, 6]);
  });

  test("sorts an array with multiple elements", () => {
    expect(insertionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  test("sorts an array with duplicate elements", () => {
    expect(insertionSort([2, 2, 2, 1, 1, 1])).toEqual([1, 1, 1, 2, 2, 2]);
  });

  test("does not mutate the original array", () => {
    const arr = [5, 3, 8, 4, 2];
    const copy = [...arr];
    insertionSort(arr);
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

    expect(insertionSort(arr, ageComparator)).toEqual(sortedArr);
  });
});
