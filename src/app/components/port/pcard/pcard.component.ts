import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ICard} from '../../../interfaces/icard';

@Component({
  selector: 'app-pcard',
  templateUrl: './pcard.component.html',
  styleUrls: ['./pcard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PcardComponent implements OnInit {
  @Input() card: ICard;

  constructor() { }

  ngOnInit() {
  }

}
