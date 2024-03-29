export type SimpleGraph<T> = Map<T, T[]>;

export type WeightedGraph<T> = Map<T, Map<T, number>>;

export type SortComparator<T> = (a: T, b: T) => number;
