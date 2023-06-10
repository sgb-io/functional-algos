import { dijkstra } from "./dijkstra";

describe("dijkstra", () => {
  test("should return shortest paths from start node to all other nodes", () => {
    const graph = new Map<string, Map<string, number>>([
      [
        "A",
        new Map([
          ["B", 6],
          ["D", 1],
        ]),
      ],
      [
        "B",
        new Map([
          ["C", 5],
          ["D", 2],
          ["E", 2],
        ]),
      ],
      ["C", new Map([["E", 5]])],
      [
        "D",
        new Map([
          ["B", 2],
          ["E", 1],
        ]),
      ],
      [
        "E",
        new Map([
          ["B", 2],
          ["C", 5],
        ]),
      ],
    ]);

    const result = dijkstra(graph, "A");
    expect(result.get("A")).toEqual(["A"]);
    expect(result.get("B")).toEqual(["A", "D", "B"]);
    expect(result.get("C")).toEqual(["A", "D", "E", "C"]);
    expect(result.get("D")).toEqual(["A", "D"]);
    expect(result.get("E")).toEqual(["A", "D", "E"]);
  });
});
