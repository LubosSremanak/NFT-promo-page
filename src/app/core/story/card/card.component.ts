import {AfterViewInit, Component, OnInit,} from '@angular/core';
import {CardService} from './service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  id: number;
  story: string | undefined;

  constructor(private cardService: CardService) {
    this.id = 4;
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.story = this.cardService.getStoryById(this.id!);
  }

  chooseCard(image: number) {
    this.id = image;
    this.story = this.cardService.getStoryById(image);
  }
}
