import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ApiService} from '../../service/api/api.service';
import {PlayerCardComponent} from '../player-card/player-card.component';
import {PlayerCardDto} from '../../models/player-card-dto';

@Component({
  selector: 'app-my-user-page',
  imports: [
    PlayerCardComponent
  ],
  templateUrl: './my-user-page.component.html',
  styleUrl: './my-user-page.component.css'
})
export class MyUserPageComponent implements OnInit{
  playerCard: PlayerCardDto | undefined
  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.apiService.get('user/getPlayerCard').subscribe(response => {
      this.playerCard = response;
    });
  }
}
