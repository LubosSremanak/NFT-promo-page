import { Injectable } from '@angular/core';

interface Card {
  id: number;
  story: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cards: Card[];

  constructor() {
    this.cards = [
      {
        id: 3,
        story:
          '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium minima nostrum reiciendis saepe! Alias esse eveniet in ipsum minima quam, quis quod reiciendis. Quasi.',
      },
      {
        id: 1,
        story:
          '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium minima nostrum reiciendis saepe! Alias esse eveniet in ipsum minima quam, quis quod reiciendis. Quasi.',
      },
      {
        id: 4,
        story:
          '4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium minima nostrum reiciendis saepe! Alias esse eveniet in ipsum minima quam, quis quod reiciendis. Quasi.',
      },
      {
        id: 2,
        story:
          '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium minima nostrum reiciendis saepe! Alias esse eveniet in ipsum minima quam, quis quod reiciendis. Quasi.',
      },
      {
        id: 6,
        story: "6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium minima nostrum reiciendis saepe! Alias esse eveniet in ipsum minima quam, quis quod reiciendis. Quasi.",
      },
      {
        id: 5,
        story:
          '5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium minima nostrum reiciendis saepe! Alias esse eveniet in ipsum minima quam, quis quod reiciendis. Quasi.',
      },
      {
        id:0,
        story:
          '0Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium minima nostrum reiciendis saepe! Alias esse eveniet in ipsum minima quam, quis quod reiciendis. Quasi.',
      },
    ];
  }

  public getStoryById(id: number): string | undefined {
    return this.cards.find((card) => card.id === id)?.story;
  }
}
