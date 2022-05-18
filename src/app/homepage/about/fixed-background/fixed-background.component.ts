import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import {WheelService} from "./service/wheel.service";

@Component({
  selector: 'app-fixed-background',
  templateUrl: './fixed-background.component.html',
  styleUrls: ['./fixed-background.component.scss']
})
export class FixedBackgroundComponent implements OnInit, AfterViewInit {
  @Input() height: number | undefined;
  @ViewChild('image') image: ElementRef | undefined;
  private animationValue: number;
  private step: number;
  private lastScrollTop: number;

  constructor(private ngZone: NgZone, private wheelService: WheelService, private changeDetector: ChangeDetectorRef) {
    this.animationValue = 0.6;
    this.lastScrollTop = 0;
    this.step = 0.005;
  }

  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    this.wheelService.onMouseUp.subscribe(this.scrollUp);
    this.wheelService.onMouseDown.subscribe(this.scrollDown);
  }

  @HostListener('document:scroll', ['$event'])
  private onWheelScroll(event: any) {
    this.ngZone.runOutsideAngular(this.handleScroll)
  }

  private scrollDown = () => {
    if (this.animationValue < 1) {
      this.animationValue += this.step;
      this.animate();
    }
  };

  private scrollUp = () => {
    if (this.animationValue > 0.6) {
      this.animationValue -= this.step;
      this.animate();
    }
  };


  private animate(): void {
    const image = this.image?.nativeElement;
    image.style.transform = `scale(${this.animationValue})`;
    this.changeDetector.detectChanges();
  }

  private handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.height! + 500){
      return;
    }
      if (st > this.lastScrollTop) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }
    this.lastScrollTop = st <= 0 ? 0 : st;
  };
}
