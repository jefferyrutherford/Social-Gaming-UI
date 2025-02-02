import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../../services/tournament/tournament.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  constructor(private ts : TournamentService) {
  }
  ngOnInit(): void {
  this.ts.getPosts();
  }
// https://discord.com/oauth2/authorize?client_id=1143744671235977287&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fprofile&scope=identify
}
