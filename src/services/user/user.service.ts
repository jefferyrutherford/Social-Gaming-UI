import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {PlayerCard, User} from "../serviceModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  private url = 'http://localhost:8080/user/getAll';

  data: any;




  getAllUsers(){
     return this.httpClient.get<User[]>(this.url);
  }

  getPlayerCard(){
    return this.httpClient.get<PlayerCard[]>("http://localhost:8080/user/" + "getPlayerCard");
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
