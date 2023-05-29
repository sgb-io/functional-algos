# Dijkstra's algorithm

Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.

This function returns the nodes in the order they were visited as an array.

## Example

Sample weighted graph:

```mermaid
graph LR
  A -->|6| B
  A -->|1| D
  B -->|5| C
  B -->|2| D
  B -->|2| E
  C -->|5| E
  D -->|2| B
  D -->|1| E
  E -->|2| B
  E -->|5| C
```

The shortest path to `E` is: `["A", "D", "E"]`
