import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {  Http, Response } from '@angular/http';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css'],
  providers: [DataService]
})
export class BibliothequeComponent implements OnInit {
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
