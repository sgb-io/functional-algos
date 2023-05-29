import { breadthFirstSearch } from "./bfs";

describe("breadthFirstSearch", () => {
  test("should return nodes in breadth-first order for a graph with number nodes", () => {
    const graph = new Map<number, number[]>([
      [1, [2, 4]],
      [2, [1, 3]],
      [3, [2]],
      [4, [1, 5]],
      [5, [4]],
    ]);

    const result = breadthFirstSearch(graph, 1);
    expect(result).toEqual([1, 2, 4, 3, 5]);
  });

  test("should return nodes in breadth-first order for a graph with string nodes", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B", "D"]],
      ["B", ["A", "C"]],
      ["C", ["B"]],
      ["D", ["A", "E"]],
      ["E", ["D"]],
    ]);

    const result = breadthFirstSearch(graph, "A");
    expect(result).toEqual(["A", "B", "D", "C", "E"]);
  });
});
