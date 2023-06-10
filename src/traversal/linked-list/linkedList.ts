import { LinkedListNode } from "../../data-structures";

type Comparator<T> = (a: T, b: T) => boolean;

export function traverseLinkedList<T>(
  node: LinkedListNode<T> | undefined,
  target: T,
  comparator: Comparator<T> = (a, b) => a === b
): T | undefined {
  while (node !== undefined) {
    if (comparator(node.value, target)) {
      return node.value;
    }
    node = node.next;
  }

  return undefined;
}

function reverseLinkedList<T>(
  node: LinkedListNode<T> | undefined
): LinkedListNode<T> | undefined {
  let prev: LinkedListNode<T> | undefined = undefined;
  while (node !== undefined) {
    const newNode: LinkedListNode<T> = { value: node.value, next: prev };
    prev = newNode;
    node = node.next;
  }
  return prev;
}

export function reverseTraverseLinkedList<T>(
  node: LinkedListNode<T> | undefined,
  target: T,
  comparator: Comparator<T> = (a, b) => a === b
): T | undefined {
  node = reverseLinkedList(node);
  while (node !== undefined) {
    if (comparator(node.value, target)) {
      return node.value;
    }
    node = node.next;
  }

  return undefined;
}
