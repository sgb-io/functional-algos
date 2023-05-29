import { quickSort } from "./quickSort";

describe("quickSort", () => {
  test("sorts an array of numbers", () => {
    expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  test("sorts an array of strings", () => {
    const stringComparator = (a: string, b: string) => a.localeCompare(b);
    expect(
      quickSort(["apple", "banana", "cherry", "apple"], stringComparator)
    ).toEqual(["apple", "apple", "banana", "cherry"]);
  });

  test("sorts an array of objects", () => {
    const arr = [{ value: 5 }, { value: 2 }, { value: 9 }, { value: 1 }];
    const comparator = (a: { value: number }, b: { value: number }) =>
      a.value - b.value;
    expect(quickSort(arr, comparator)).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 5 },
      { value: 9 },
    ]);
  });

  test("does not mutate the original array", () => {
    const arr = [5, 3, 8, 4, 2];
    const copy = [...arr];
    quickSort(arr);
    expect(arr).toEqual(copy);
  });
});
