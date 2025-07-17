import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {ApiService} from '../../service/api/api.service';
import {PlayerCardComponent} from '../player-card/player-card.component';
import {PlayerCardDto} from '../../models/player-card-dto';
import {MatCard} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-my-user-page',
  imports: [
    PlayerCardComponent,
    NgIf,
    MatCard,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './my-user-page.component.html',
  styleUrl: './my-user-page.component.css'
})
export class MyUserPageComponent implements OnInit {
  playerCard: PlayerCardDto | undefined
  playerCardEntries: { key: string, value: any }[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.get('user/getPlayerCard').subscribe(response => {
      this.playerCard = response;
      this.playerCardEntries = Object.entries(response).map(([key, value]) => ({key, value}));
    });
  }
}
