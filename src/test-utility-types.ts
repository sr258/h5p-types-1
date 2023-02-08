export type AreEqual<A, B> = (<G>() => G extends A ? 1 : 2) extends <
  G,
>() => G extends B ? 1 : 2
  ? true
  : A extends B
  ? B extends A
    ? true
    : false
  : false;

export type Expect<T extends true> = T;