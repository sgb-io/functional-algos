import { LinkedListNode } from "../../data-structures";
import { traverseLinkedList, reverseTraverseLinkedList } from "./linkedList";

describe("LinkedList operations", () => {
  const list: LinkedListNode<number> = {
    value: 1,
    next: { value: 2, next: { value: 3, next: undefined } },
  };

  // Verify that the input list is not mutated
  const node1 = list;
  const node2 = list.next!;
  const node3 = list.next!.next!;
  const checkLinkedListIntegrity = () => {
    expect(node1).toBe(list);
    expect(node1.value).toBe(1);
    expect(node1.next).toBe(node2);

    expect(node2).toBe(list.next);
    expect(node2.value).toBe(2);
    expect(node2.next).toBe(node3);

    expect(node3).toBe(list.next!.next);
    expect(node3.value).toBe(3);
    expect(node3.next).toBeUndefined();
  };

  test("traverseLinkedList finds a target in the list", () => {
    expect(traverseLinkedList(list, 2)).toEqual(2);
    checkLinkedListIntegrity();
  });

  test("traverseLinkedList returns undefined if the target is not in the list", () => {
    expect(traverseLinkedList(list, 5)).toBeUndefined();
    checkLinkedListIntegrity();
  });

  test("reverseTraverseLinkedList finds a target in the reversed list", () => {
    expect(reverseTraverseLinkedList(list, 2)).toEqual(2);
    checkLinkedListIntegrity();
  });

  test("reverseTraverseLinkedList returns undefined if the target is not in the list", () => {
    expect(reverseTraverseLinkedList(list, 5)).toBeUndefined();
    checkLinkedListIntegrity();
  });
});
