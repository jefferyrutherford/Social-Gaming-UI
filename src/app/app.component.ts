import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TournamentService} from "../services/tournament/tournament.service";
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Social-Gaming-UI';
  posts:any;

  constructor(private tournamentService : TournamentService) {
    console.log(tournamentService.getHeroes());
  }


  ngOnInit() {
    this.tournamentService.getPosts()
      .subscribe(response => {
        this.posts = response;
      });


    console.log(this.posts);
  }
}
