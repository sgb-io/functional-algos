type MemoizedFunction<R> = (...args: any[]) => R;

export function memoizeOne<R>(func: MemoizedFunction<R>) {
  let lastResult: R | undefined;
  let lastArgs: any[] | undefined;

  return function (...args) {
    if (!lastArgs) {
      const result = func.apply(this, args);
      lastArgs = args;
      lastResult = result;
      return result;
    }

    if (lastArgs.length) {
      const matches = args.every((v, index) => {
        return v === lastArgs[index];
      });
      if (matches) {
        return lastResult;
      }
    }

    lastArgs = args;
    const result = func.apply(this, args);
    lastResult = result;

    return result;
  };
}
