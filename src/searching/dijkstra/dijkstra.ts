import type { WeightedGraph } from "../../data-structures/graph";

const createPath = <T>(
  previousNodes: Map<T, T | null>,
  destinationNode: T
): T[] => {
  let node: T | null = destinationNode;
  const path: T[] = [];
  while (node) {
    path.unshift(node);
    node = previousNodes.get(node) || null;
  }
  return path;
};

export const dijkstra = <T>(
  graph: WeightedGraph<T>,
  startNode: T
): Map<T, T[]> => {
  const shortestPaths: Map<T, number> = new Map();
  const previousNodes: Map<T, T | null> = new Map();
  const unvisitedNodes: Set<T> = new Set(graph.keys());

  shortestPaths.set(startNode, 0);
  previousNodes.set(startNode, null);

  while (unvisitedNodes.size) {
    const currentNode = Array.from(unvisitedNodes).reduce((minNode, node) => {
      const minNodeDistance = shortestPaths.get(minNode) || Infinity;
      const nodeDistance = shortestPaths.get(node) || Infinity;
      return nodeDistance < minNodeDistance ? node : minNode;
    }, startNode);

    const currentDistance = shortestPaths.get(currentNode) || 0;

    for (const [neighbor, distance] of graph.get(currentNode)?.entries() ||
      []) {
      const totalDistance = currentDistance + distance;
      if (
        !shortestPaths.has(neighbor) ||
        totalDistance < (shortestPaths.get(neighbor) || 0)
      ) {
        shortestPaths.set(neighbor, totalDistance);
        previousNodes.set(neighbor, currentNode);
      }
    }

    unvisitedNodes.delete(currentNode);
  }

  const result: Map<T, T[]> = new Map();
  for (const node of graph.keys()) {
    result.set(node, createPath(previousNodes, node));
  }

  return result;
};
