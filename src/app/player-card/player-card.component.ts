import {Component} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {PlayerCard} from "../../services/serviceModel";

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  card: PlayerCard [] = [];
  portraitID: string | undefined;
  userID: string | undefined;

  constructor(private us: UserService) {
  }

  async ngOnInit(): Promise<void> {
    await this.us.getPlayerCard().subscribe(x => {
      this.card = x;
      this.portraitID = JSON.parse(JSON.stringify(this.card)).portraitID;
      this.userID = JSON.parse(JSON.stringify(this.card)).userID;
    });

  }
}
