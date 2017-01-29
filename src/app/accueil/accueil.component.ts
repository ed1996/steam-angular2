import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {  Http, Response } from '@angular/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
    providers: [DataService]
})
export class AccueilComponent implements OnInit {
jeux;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      allgames => {
        this.jeux = allgames;
      console.log('subscribe response : ', allgames);}
    );
  }

}
