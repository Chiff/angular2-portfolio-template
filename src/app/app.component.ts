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
    // @ts-ignore
    window.console = console || {};
    // @ts-ignore
    window.console.log = console.log || {};

    // It would be very kind if you won't remove this line. Thank you very much!
    console.log(
      '%c ♥♥♥ Created with love by Martin Filo! ♥♥♥ %c Visit https://github.com/Chiff for more info',
      'background: blue; color: white; display: block;',
      'background: white; color: black; display: block;'
    );

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
