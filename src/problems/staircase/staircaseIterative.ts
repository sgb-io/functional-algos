// Example that supports 1, 2 or 3 steps at time, iteratively.
// This approach could be extended to support more steps at a time.
export function staircaseIterative(steps: number) {
  if (steps < 0) {
    return 0;
  }

  if (steps <= 1) {
    return 1;
  }

  const paths = [1, 1, 2];

  for (let i = 3; i <= steps; i += 1) {
    const newCount = paths[0] + paths[1] + paths[2];
    paths[0] = paths[1];
    paths[1] = paths[2];
    paths[2] = newCount;
  }

  return paths[2];
}
