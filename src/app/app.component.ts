import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
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

  constructor(
    private tournamentService : TournamentService,
    private route: ActivatedRoute//,
    //private location: Location
    ) {
    console.log(tournamentService.getHeroes());
  }


  ngOnInit() {
    this.tournamentService.getPosts()
      .subscribe(response => {
        this.posts = response;
      });



        const params = new URLSearchParams(fragment);
        const accessToken = params.get('code');

        // Store the access token securely (e.g., in local storage)
        // @ts-ignore
        localStorage.setItem('access_token', accessToken);

        // Redirect to the desired page after successful authentication
        console.log("Logged In")
      }
      else {

      }

    });

// https://discord.com/oauth2/authorize?client_id=1143744671235977287&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fprofile&scope=identify
  }
}
