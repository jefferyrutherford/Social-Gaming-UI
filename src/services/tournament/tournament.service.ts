import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private httpClient: HttpClient) { }

  //private url = 'http://jsonplaceholder.typicode.com/posts';
  private url = 'http://localhost:8080/profile/';




  getPosts(){

     this.httpClient.get(this.url).subscribe(res => {
      console.log('Response message:', res);
  });
  }


  getHeroes(): ({ name: string; age: number } | { name: string; age: number } | { name: string; age: number })[] {
    const jsonArray = [
      { "name": "John", "age": 30 },
      { "name": "Mary", "age": 25 },
      { "name": "Peter", "age": 35 }
    ];

    const tournaments = of(jsonArray)
    return jsonArray;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
