import type { SimpleGraph } from "../../data-structures/graph";

export const depthFirstSearch = <T>(graph: SimpleGraph<T>, start: T): T[] => {
  let dfsOrder: T[] = [];

  const dfs = (stack: T[], visited: Set<T>) => {
    if (stack.length === 0) return;

    const [node, ...rest] = stack;
    dfsOrder = [...dfsOrder, node];

    const unvisitedNeighbors =
      graph.get(node)?.filter((neighbor) => !visited.has(neighbor)) || [];
    dfs([...unvisitedNeighbors, ...rest], new Set([...visited, node]));
  };

  dfs([start], new Set([start]));

  return dfsOrder;
};
