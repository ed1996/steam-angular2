import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import { HttpModule, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PcComponent } from './pc/pc.component';
import { Ps4Component } from './ps4/ps4.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { AccueilComponent } from './accueil/accueil.component';




const appRoutes: Routes = [
  { path: 'pc', component: PcComponent },
  { path: 'ps4', component: Ps4Component },
  { path: 'bibliotheque', component: BibliothequeComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }

];



@NgModule({
  declarations: [
    AppComponent,
    PcComponent,
    Ps4Component,
    HeaderComponent,
    FooterComponent,
    BibliothequeComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
