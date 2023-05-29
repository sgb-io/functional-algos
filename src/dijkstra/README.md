# Dijkstra's algorithm

Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.

This function accecepts a graph with starting node and returns a `Map` containing shortest paths from the starting node to all other nodes.

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

The shortest paths from `A` to the other nodes are:

- `A` (itself): `["A"]`
- `B`: `["A", "D", "B"]`
- `C`: `["A", "D", "E", "C"]`
- `D`: `["A", "D"]`
- `E`: `["A", "D", "E"]`
