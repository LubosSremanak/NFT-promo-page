import {ChangeDetectionStrategy, Component, HostListener, NgZone, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LottieAnimationsService} from "../../shared/lottie-ls/service/lottie-animations.service";
import {collapseAnimation} from "angular-animations";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [collapseAnimation({duration: 300})],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  readonly breakpoint: number = 600;
  menuClick: boolean;
  private height: number;
  private isMenuRolling: boolean;
  private isMenuRolled: boolean;

  constructor(private lottieService: LottieAnimationsService,
              private router: Router,
              private ngZone: NgZone,) {
    this.height = window.innerHeight;
    this.menuClick = true;
    this.isMenuRolled = false;
    this.isMenuRolling = false;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && this.isOpenOnMobile()) {
        this.clicked();
      }
    });
  }

  ngOnInit(): void {
    this.menuClick = window.innerWidth >= this.breakpoint;
  }

  clicked() {
    this.ngZone.runOutsideAngular(() => {
      this.menuClick = !this.menuClick;
      if (this.menuClick) {
        this.lottieService.playAnimationInRange('menuButton', [10, 60], true);
      } else {
        this.lottieService.playAnimationInRange('menuButton', [50, 10], true);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.ngZone.runOutsideAngular(() => {
      if (window.innerWidth <= this.breakpoint) {

      }
      this.menuClick = window.innerWidth >= this.breakpoint;
      const height = window.innerHeight;
      this.lottieService.playAnimationInRange('menuButton', [50, 50], true);
    });
  }

  menuButtonInitialized(): void {
    this.lottieService.getAnimationById('menuButton')?.setSpeed(1.8);
  }


  rollDone(event: any): void {
    this.isMenuRolled = true;
    this.isMenuRolling = false;
  }

  rollStart(event: any): void {
    this.isMenuRolling = true;
    this.isMenuRolled = false;
  }

  isOpenOnMobile(): boolean {
    return this.menuClick && window.innerWidth <= this.breakpoint;
  }
}
