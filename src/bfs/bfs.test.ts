import { breadthFirstSearch } from "./bfs";

describe("breadthFirstSearch", () => {
  it("should return the correct BFS order for a graph with number nodes", () => {
    const graph = new Map<number, number[]>([
      [1, [2, 3]],
      [2, [1, 4, 5]],
      [3, [1, 6]],
      [4, [2]],
      [5, [2, 6]],
      [6, [3, 5]],
    ]);

    const result = breadthFirstSearch(graph, 1);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should return the correct BFS order for a graph with string nodes", () => {
    const graph = new Map<string, string[]>([
      ["A", ["B", "C"]],
      ["B", ["A", "D", "E"]],
      ["C", ["A", "F"]],
      ["D", ["B"]],
      ["E", ["B", "F"]],
      ["F", ["C", "E"]],
    ]);

    const result = breadthFirstSearch(graph, "A");
    expect(result).toEqual(["A", "B", "C", "D", "E", "F"]);
  });
});
