import {ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel3d',
  templateUrl: './carousel3d.component.html',
  styleUrls: ['./carousel3d.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel3dComponent implements OnInit {
  readonly slides: number[];
  @ViewChild('carousel') carousel: ElementRef | undefined;

  constructor(private ngZone: NgZone) {
    this.slides = [...Array(5).keys()];
    this.actualSlide = 0;
    this.isRotate = true;
  }

  private actualSlide: number;
  isRotate: boolean;

  ngOnInit(): void {}

  rotate(): void {
    this.ngZone.runOutsideAngular(() => {
      const angle = -this.actualSlide * 72;
      if (this.carousel) {
        this.carousel.nativeElement.style.transform = `translateZ(-288px)
         translateY(0)
         translateX(-50%)
         rotateY(${angle}deg)
      `;
      }
    });
  }

  previous(): void {
    this.isRotate = false;
    this.actualSlide--;
    this.rotate();
  }

  next(): void {
    this.isRotate = false;
    this.actualSlide++;
    this.rotate();
  }
}
