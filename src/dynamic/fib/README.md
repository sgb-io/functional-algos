# Fibonacci

The Fibonacci Sequence is a series of numbers where a number is the sum of the two preceding ones, usually starting with 0 and 1. That is, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

This function calculates the _nth_ Fibonacci number. It uses dynamic programming to avoid the redundant work that occurs in the naive, recursive version.

## Usage

```typescript
import { fib } from "functional-algos";

console.log(fib(10)); // 55
```
