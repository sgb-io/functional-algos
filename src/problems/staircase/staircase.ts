import { fib } from "../../dynamic/fib";

// Simple example where we can only take 1 or 2 steps at a time.
export function staircase(n: number): number {
  if (n < 1) {
    return 0;
  }

  return fib(n + 1);
}
