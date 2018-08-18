import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ICard} from '../../interfaces/icard';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortComponent implements OnInit {
  cards: ICard[] = [];

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.cards = this.parseCards(this.dataService.portfolio);
    console.log(this.cards);
  }

  parseCards(cards: ICard[]): ICard[] {
    return cards.map((card: ICard) => {
      return {
        title: card.title || null,
        description: card.description || null,
        tags: card.tags || null,
        links: card.links || null,
      };
    });

  }
}
