type MemoizedFunction<R> = (...args: any[]) => R;

type CacheResult<R> = { args: any[]; result: R };

export function memoize<R>(func: MemoizedFunction<R>) {
  const prevResults: CacheResult<R>[] = [];

  return function (...args: any[]) {
    // Has there been a previous result with the same args?
    // If so, return that result
    const existingResult = prevResults.find((result) => {
      return result.args.every((v, index) => {
        return v === args[index];
      });
    });

    if (existingResult) {
      return existingResult.result;
    }

    // In all other cases, call the function, store the result and return it
    const result = func.apply(this, args);
    prevResults.push({ args, result });

    return result;
  };
}
