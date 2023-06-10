import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  test("should find the index of the target in a number array (even in length)", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(arr, 3)).toEqual(2);
    expect(binarySearch(arr, 11)).toEqual(-1);
  });

  test("should find the index of the target in a string array (odd in length)", () => {
    const arr = ["apple", "banana", "cherry", "date", "elderberry"];
    expect(binarySearch(arr, "cherry")).toEqual(2);
    expect(binarySearch(arr, "fig")).toEqual(-1);
  });
});
