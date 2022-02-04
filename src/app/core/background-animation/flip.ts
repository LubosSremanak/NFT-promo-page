import {animate, state, style, transition, trigger} from "@angular/animations";

export const flipLsAnimation=trigger('flip', [
  state('true', style({
    transform: 'none'
  })),
  state('false', style({
    transform: 'rotateY(180deg) scale(-1,1)'
  })),
  transition('true => false', [
    animate('500ms')
  ]),
  transition('false => true', [
    animate('500ms')
  ])
])
