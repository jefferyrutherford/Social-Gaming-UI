import { Component } from '@angular/core';
import {TournamentService} from "../../services/tournament/tournament.service";
import {NgForOf} from "@angular/common";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  posts:any;

  constructor(private userService : UserService) {
  }


}
