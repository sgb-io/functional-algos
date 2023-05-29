export function fib(n: number): number {
  if (n <= 0) {
    throw new Error("Input must be a positive integer.");
  }

  const fibNums = [0, 1]; // base cases

  for (let i = 2; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}
