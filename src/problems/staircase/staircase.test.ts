import { staircase } from "./staircase";
import { staircaseIterative } from "./staircaseIterative";

describe("staircase", () => {
  test("correctly calculates the number of routes (1 or 2 steps)", () => {
    expect(staircase(-1)).toBe(0);
    expect(staircase(0)).toBe(0);
    expect(staircase(1)).toBe(1);
    expect(staircase(2)).toBe(2);
    expect(staircase(3)).toBe(3);
    expect(staircase(4)).toBe(5);
    expect(staircase(5)).toBe(8);
    expect(staircase(6)).toBe(13);
    expect(staircase(7)).toBe(21);
    expect(staircase(8)).toBe(34);
    expect(staircase(9)).toBe(55);
    expect(staircase(10)).toBe(89);
  });

  test("correctly calculates the number of routes (1, 2 or 3 steps)", () => {
    expect(staircaseIterative(3)).toBe(4);
    expect(staircaseIterative(4)).toBe(7);
    expect(staircaseIterative(5)).toBe(13);
    expect(staircaseIterative(6)).toBe(24);
    expect(staircaseIterative(7)).toBe(44);
    expect(staircaseIterative(8)).toBe(81);
    expect(staircaseIterative(9)).toBe(149);
    expect(staircaseIterative(10)).toBe(274);
  });
});
