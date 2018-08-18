import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ICard} from '../../interfaces/icard';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortComponent implements OnInit {
  cards: ICard[] = [];

  constructor() {
  }

  ngOnInit() {
    this.cards.push({
      title: 'Test Name',
      description: 'Test card - short description about project',
      tags: ['adasd', 'anhg', 'mfdsasd', 'yhb'],
      links: [
        {
          url: 'https://google.com',
          class: 'fab fa-google'
        }
      ]
    });
    this.cards.push({
      title: 'Test Name',
      description: 'Test card - short description about project',
      tags: ['adasd', 'anhg', 'mfdsasd', 'yhb'],
      links: [{
        url: 'https://google.com',
        class: 'fab fa-google'
      }]
    });
    this.cards.push({
      title: 'Test Name',
      description: 'Test card - short description about project',
      tags: ['adasd', 'anhg', 'mfdsasd', 'yhb'],
      links: [{
        url: 'https://google.com',
        class: 'fab fa-google'
      }]
    });
    this.cards.push({
      title: 'Test Name',
      description: 'Test card - short description about project',
      tags: ['adasd', 'anhg', 'mfdsasd', 'yhb'],
      links: [{
        url: 'https://google.com',
        class: 'fab fa-google'
      }]
    });
    this.cards.push({
      title: 'Test Name',
      description: 'Test card - short description about project',
      tags: ['adasd', 'anhg', 'mfdsasd', 'yhb'],
      links: [{
        url: 'https://google.com',
        class: 'fab fa-google'
      }]
    });
  }

}
