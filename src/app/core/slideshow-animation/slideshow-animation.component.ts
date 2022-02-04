import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow-animation',
  templateUrl: './slideshow-animation.component.html',
  styleUrls: ['./slideshow-animation.component.scss'],
})
export class SlideshowAnimationComponent implements OnInit {
  constructor() {}

  identify(index: any): number {
    return index;
  }

  ngOnInit(): void {}
}
