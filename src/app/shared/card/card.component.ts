import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit,} from '@angular/core';
import {CardService} from './service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() id: number;
  story: string | undefined;

  constructor(private cardService: CardService,
              private changeDetector:ChangeDetectorRef) {
    this.id = 3;
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.story = this.cardService.getStoryById(0);
    this.changeDetector.detectChanges();
  }

  chooseCard(image: number) {
    this.id = image;
    this.story = this.cardService.getStoryById(image);
  }
}
