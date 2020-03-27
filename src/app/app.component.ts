import { Component } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  group
} from "@angular/animations";
import { routerAnimationGenerator } from "./animation";

const TIME = 700;
const routes = routerAnimationGenerator(5);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("slide", [
      transition(routes[0], [
        group([
          query(
            ":leave",
            [
              animate(
                TIME,
                keyframes([
                  style({
                    offset: 0.5,
                    transform: "scale(0.7)"
                  }),
                  style({
                    offset: 1,
                    transform: "translateX(-100%) scale(0.7)"
                  })
                ])
              )
            ],
            { optional: true }
          ),

          query(
            ":enter",
            style({
              transform: "translateX(100%) scale(0.7)"
            }),
            { optional: true }
          ),

          query(
            ":enter",
            animate(
              TIME,
              keyframes([
                style({
                  transform: "translateX(0) scale(0.7)",
                  offset: 0.5
                }),
                style({
                  transform: "translateX(0) scale(1)",
                  offset: 1
                })
              ])
            ),
            { optional: true, delay: TIME / 2 }
          )
        ])
      ]),

      transition(routes[1], [
        group([
          query(
            ":leave",
            [
              animate(
                TIME,
                keyframes([
                  style({
                    offset: 0.5,
                    transform: "scale(0.7)"
                  }),
                  style({
                    offset: 1,
                    transform: "translateX(100%) scale(0.7)"
                  })
                ])
              )
            ],
            { optional: true }
          ),

          query(
            ":enter",
            style({
              transform: "translateX(-100%) scale(0.7)"
            }),
            { optional: true }
          ),

          query(
            ":enter",
            animate(
              TIME,
              keyframes([
                style({
                  transform: "translateX(0) scale(0.7)",
                  offset: 0.5
                }),
                style({
                  transform: "translateX(0) scale(1)",
                  offset: 1
                })
              ])
            ),
            { optional: true, delay: TIME / 2 }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {}
