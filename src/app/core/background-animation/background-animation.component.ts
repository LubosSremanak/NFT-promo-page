import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, NgZone, OnInit,} from '@angular/core';
import {ImageAnimator} from './image.animator';
import {flipLsAnimation} from './flip';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.scss'],
  animations: [flipLsAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundAnimationComponent implements OnInit {
  images: ImageAnimator[];
  private round: number;
  width: any;
  private allImages: number;

  constructor(
    private ngZone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) {
    this.allImages = 0;
    this.images = this.createImageAnimators();
    this.round = 0;
  }

  countImages(): void {
    const columns = Math.round(window.innerWidth / 100);
    const rows = 4;
    this.allImages = Math.round(columns * rows);
    this.width = {
      width: `calc(100% / ${columns})`,
      height: `calc(100% / ${rows})`,
    };

    console.log(this.width)
  }

  @HostListener('window:resize')
  onResize() {
    this.ngZone.runOutsideAngular(() => {
      this.images = this.createImageAnimators();
    });
  }

  async ngOnInit(): Promise<void> {
    this.animate();
  }

  private animate(): void {
    const lastTime = this.getTime();
    const delay = 0;
    requestAnimationFrame(() => this.render(delay, lastTime));
  }

  private getTime = (): number => new Date().getTime();

  private render = (seconds: number, lastTime: number): void => {
    let currentTime = this.getTime();
    const time = currentTime - lastTime;
    if (time >= 1800) {
      lastTime = currentTime;
      seconds++;
      this.round++;
      this.flip();
    }
    requestAnimationFrame(() => this.render(seconds, lastTime));
  };

  private generateNumber = (from: number, to: number): number => {
    return Math.floor(Math.random() * (to - from + 1) + from);
  };

  trackImage(index: number, image: ImageAnimator) {
    return image ? image : undefined;
  }

  shuffle(array: any[]) {
    let tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  }

  createImageAnimators(): ImageAnimator[] {
    this.countImages();
    const shuffleIds = this.shuffle([...Array(this.allImages).keys()]);
    return shuffleIds.map((imageId: number) => {
      return {id: imageId + 1, flip: true};
    });
  }

  flip(): void {
    this.randomSwap();
    this.randomSwap();
    this.randomSwap();
  }

  randomSwap(): void {
    let random = this.generateNumber(0, this.allImages - 1);
    this.images[random].flip = !this.images[random].flip;
    this.changeDetector.detectChanges();
    this.images[random].id = this.generateNumber(1, 74);
  }
}
