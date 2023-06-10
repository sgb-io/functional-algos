# Staircase Problem

There are `n` stairs, a person standing at the bottom wants to reach the top. The person can climb either `1` or `2` stairs at a time. _Count the number of ways, the person can reach the top._

There are several ways to solve this problem (recursive, iterative, dynamic programming, brute force). In this example, we use the dynamic programming `fib` implementation.

It's not always clear if `0` steps should be `1` path or `0` paths. You could argue either way: (a) there was no steps so there are no paths through the steps or (b) there was no steps so there is only 1 path through the 'steps'. In these examples, we opt for (a).

## More than 1 or 2 steps at a time

The simple implementation only supports 1 or 2 steps at a time, which means a simple call to `fib` works.

If more steps can be taken, it's advisable to use an iterative implementation. See `staircaseIterative.ts` for an example that supports 3 steps at a time, too.
