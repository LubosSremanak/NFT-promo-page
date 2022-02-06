import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  link: number;

  constructor() {
    this.link = 0;
  }

  ngOnInit(): void {
  }

  hoverAnimation(linkIndex: number): void {
    this.link = linkIndex;
  }

  resetHover():void {
    this.link = 0;
  }
}
