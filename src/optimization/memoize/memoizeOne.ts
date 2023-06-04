type MemoizedFunction<R> = (...args: any[]) => R;

export function memoizeOne<R>(func: MemoizedFunction<R>) {
  let lastResult: R | undefined;
  let lastArgs: any[] = [];
  let hasLastResult = false;

  return function (...args: any[]) {
    // Same number of arguments (>0) - check if they are the same
    if (lastArgs.length === args.length && args.length > 0) {
      const matches = args.every((v, index) => {
        return v === lastArgs[index];
      });
      // If everything matched, return the last result
      if (matches) {
        return lastResult;
      }
    }

    // No arguments plus lastResult was set - return the last result
    // This is to handle the case where the function has no arguments
    if (hasLastResult && args.length === 0 && lastArgs.length === 0) {
      return lastResult;
    }

    // Arguments didn't match - call the function, store the result and return it
    const result = func.apply(this, args);
    lastArgs = args;
    hasLastResult = true;
    lastResult = result;

    return result;
  };
}
