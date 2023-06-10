import { trappingWater } from "./trappingWater";

describe("Test the trap function", () => {
  test("Scenario with no trapped water", () => {
    const result = trappingWater([1, 2, 3, 4, 5]);
    expect(result).toBe(0);
  });

  test("Scenario with trapped water", () => {
    const result = trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    expect(result).toBe(6);
  });

  test("Scenario with uneven surface", () => {
    const result = trappingWater([4, 2, 0, 3, 2, 5]);
    expect(result).toBe(9);
  });

  test("Scenario with flat surface", () => {
    const result = trappingWater([2, 2, 2, 2, 2]);
    expect(result).toBe(0);
  });

  test("Scenario with single bar", () => {
    const result = trappingWater([3]);
    expect(result).toBe(0);
  });

  test("Scenario with empty input", () => {
    const result = trappingWater([]);
    expect(result).toBe(0);
  });

  test("Scenario with descending and ascending staircase", () => {
    const result = trappingWater([5, 4, 3, 2, 1, 2, 3, 4, 5]);
    expect(result).toBe(16);
  });
});
