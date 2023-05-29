import { depthFirstSearch } from "./dfs";

describe("depthFirstSearch", () => {
  test("should return nodes in depth-first order for a graph with number nodes", () => {
    const graph = new Map<number, number[]>([
      [1, [2, 5]],
      [2, [1, 3]],
      [3, [2, 4]],
      [4, [3]],
      [5, [1]],
    ]);

    const result = depthFirstSearch(graph, 1);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return nodes in depth-first order for a graph with string nodes", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B", "E"]],
      ["B", ["A", "C"]],
      ["C", ["B", "D"]],
      ["D", ["C"]],
      ["E", ["A"]],
    ]);

    const result = depthFirstSearch(graph, "A");
    expect(result).toEqual(["A", "B", "C", "D", "E"]);
  });
});
