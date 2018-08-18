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

  USER_LINK = 'https://mfc-portfolio.firebaseio.com/user.json';
  PORTFOLIO_LINK = 'https://mfc-portfolio.firebaseio.com/portfolio.json';

  constructor(private dataService: DataService) {
    // https://www.sitepoint.com/community/t/how-not-to-let-console-log-to-cause-error-on-ie-or-other-browsers/4307
    // @ts-ignore
    window.console = window.console || {};
    window.console.log = window.console.log || function () {
    };

    // It would be very kind if you won't remove this line. Thank you very much!
    console.log(
      '%c ♥♥♥ Created with love by Martin Filo! ♥♥♥ %c Visit https://martinfilo.me for more info',
      'background: blue; color: white; display: block;',
      'background: white; color: black; display: block;'
    );

    dataService.initData(this.USER_LINK, this.PORTFOLIO_LINK).subscribe(data => {
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
