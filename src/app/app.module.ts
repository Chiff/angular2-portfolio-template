import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {PortComponent} from './components/port/port.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {PcardComponent} from './components/port/pcard/pcard.component';
import {NavigatorComponent} from './components/navigator/navigator.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'portfolio', pathMatch: 'full', component: PortComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PortComponent,
    NotFoundComponent,
    PcardComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
