import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {  Http, Response } from '@angular/http';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.component.html',
  styleUrls: ['./ps4.component.css'],
  providers: [DataService]
})
export class Ps4Component implements OnInit {
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
