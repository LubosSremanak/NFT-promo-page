import {ChangeDetectionStrategy, Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow-animation',
  templateUrl: './slideshow-animation.component.html',
  styleUrls: ['./slideshow-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowAnimationComponent implements OnInit {
  constructor(private ngZone: NgZone) {
  }

  identify(index: any): number {
    return index;
  }

  ngOnInit(): void {}
}
