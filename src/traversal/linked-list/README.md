# LinkedList

LinkedList is a fundamental data structure that holds a collection of elements, where each element points to the next one. Each element is wrapped inside a Node that contains the element itself (value) and a pointer to the next Node (next).

This implementation provides a standard traversal method as well as a reverse traversal method.

It should be noted that `reverseTraverseLinkedList` is slower, as it reverses an existing Linked List internally.

## Usage

```typescript
import {
  traverseLinkedList,
  reverseTraverseLinkedList,
} from "functional-algos";

const result = traverseLinkedList(node, target);
const reversalResult = reverseTraverseLinkedList(node, target);
```

## Examples

```typescript
const node = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const target = 2;
const result = traverseLinkedList(node, target); // 2
const reversalResult = reverseTraverseLinkedList(node, target); // 2
```
