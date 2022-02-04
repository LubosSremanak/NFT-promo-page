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
        id: 4,
        story:
          'Divočakos is the main card that every divočak must have, representing the unity of the community.',
      },
      {
        id: 1,
        story:
          'Bicakos is a role model for every wild boar, he professes the Holy Trinity, pumpos, kreations and proteinos.',
      },
      {
        id: 2,
        story:
          'Boxeros na brados, chin blow is very effective a self-defense technique with hand, recognized by the community.',
      },
      {
        id: 4,
        story:
          'Kopačkos na zatylkos, kick to the nape of the neck is a very effective a self-defense technique with foot, recognized by the community.',
      },
      {
        id: 3,
        story:
          'Jakooou čooou is the scream of an angry divočakos, usually followed by kopačkos na zatylkos or boxeros na brados.',
      },
      {
        id: 6,
        story: "It's a sacred phrase, something like Amen to Christians.",
      },
      {
        id: 5,
        story:
          'It is a sacred state in which there is a balance between body, soul and universe.',
      },
    ];
  }

  public getStoryById(id: number): string | undefined {
    return this.cards.find((card) => card.id === id)?.story;
  }
}
