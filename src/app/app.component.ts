import {AfterViewInit, Component, HostListener, NgZone} from '@angular/core';
import {fadeInOnEnterAnimation, fadeOutOnLeaveAnimation} from "angular-animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInOnEnterAnimation({anchor: 'enter'}),
    fadeOutOnLeaveAnimation({anchor: 'leave'}),
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'Divocakos';

  isScrollbarFar: boolean;

  constructor(private ngZone: NgZone) {
    this.isScrollbarFar = false;
  }

  ngAfterViewInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  scrollTracking(event: any) {
    this.ngZone.runOutsideAngular(this.scrolledOutOfHeader);
  }

  private scrolledOutOfHeader = (): void => {
    if (window.pageYOffset < 200) {
      this.isScrollbarFar = false;
    }
    if (window.pageYOffset >= 200) {
      this.isScrollbarFar = true;
    }
  };

  scrollUp() {

  }

}
