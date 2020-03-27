import {
  trigger,
  transition,
  style,
  animate,
  state
} from "@angular/animations";

export const slide = trigger("slide", [
  state("void", style({ transform: "{{ transform }}", opacity: 0 }), {
    params: { transform: "translateY(-15px)" }
  }),
  transition(":enter, :leave", [animate("{{ duration }}ms {{ delay }}ms")], {
    params: {
      duration: 350,
      delay: 0
    }
  })
]);

export const fade = trigger("fade", [
  state(
    "void",
    style({
      opacity: "{{ opacity }}"
    }),
    {
      params: { opacity: 0 }
    }
  ),
  transition(":enter, :leave", [animate("{{ duration }}")], {
    params: {
      duration: "350ms"
    }
  })
]);

export class AnimationConfig<T = any> {
  value = null;
  constructor(public params: T) {}
}

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
