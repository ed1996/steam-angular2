import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('../assets/games.json').map( (data:Response) => {
        let body = data.json();
        console.log(body);
        return body;
      });
  }

}
