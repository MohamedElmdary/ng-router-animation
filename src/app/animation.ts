export function routerAnimationGenerator(n: number): [string, string] {
  const result: [string[], string[]] = [[], []];

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      result[0].push(`${i} => ${j}`);
      result[1].push(`${j} => ${i}`);
    }
  }

  return [result[0].join(","), result[1].join(",")];
}
