import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getPortfolio: string;
  getUser: string;

  constructor(private http: HttpClient) {
  }

  initData(user: string, portfolio: string): Observable<any> {
    this.getUser = user;
    this.getPortfolio = portfolio;

    return forkJoin(
      this.http.get(this.getUser),
      this.http.get(this.getPortfolio)
    );
  }
}
