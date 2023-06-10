import { quickSort } from "./quickSort";

describe("quickSort", () => {
  test("sorts an empty array", () => {
    const arr: number[] = [];
    expect(quickSort(arr)).toEqual([]);
  });

  test("sorts an array of numbers", () => {
    const arr = [5, 3, 2, 4, 1];
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an array of strings", () => {
    const arr = ["e", "c", "b", "d", "a"];
    const comparator = (a: string, b: string) => a.localeCompare(b);
    expect(quickSort(arr, comparator)).toEqual(["a", "b", "c", "d", "e"]);
  });

  test("sorts an array of objects", () => {
    const arr = [{ value: 3 }, { value: 2 }, { value: 1 }];
    const comparator = (a: { value: number }, b: { value: number }) =>
      a.value - b.value;
    expect(quickSort(arr, comparator)).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 },
    ]);
  });
});
