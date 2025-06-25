import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api/api.service';
import {UserDto} from '../../models/user-dto';
import {NgForOf, NgIf} from '@angular/common';
import {MatCard} from '@angular/material/card';
import {MatToolbar} from '@angular/material/toolbar';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-admin',
  imports: [
    NgForOf,
    NgIf,
    MatCard,
    MatToolbar,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatRowDef
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  users: UserDto[] = [];
  displayedColumns: string[] = ['email', 'userID', 'lastLoggedIn'];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.get('admin/getUsers').subscribe(response => {
      this.users = response;
    });
  }
}
