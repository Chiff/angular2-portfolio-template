import {Component} from '@angular/core';
import {fadeAnimation} from './animations';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  loaded = false;

  constructor(private dataService: DataService) {
    dataService.initData(
      'https://mfc-portfolio.firebaseio.com/user.json',
      'https://mfc-portfolio.firebaseio.com/portfolio.json'
    ).subscribe(data => {
      this.loaded = true;
      if (typeof <Object>data[0].hasOwnProperty('name')) {
        dataService.user = data[0];
        dataService.portfolio = data[1];
      } else {
        dataService.user = data[1];
        dataService.portfolio = data[0];
      }
    });
  }
}
