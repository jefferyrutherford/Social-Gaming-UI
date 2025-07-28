import {Component, OnInit} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {NgIf} from "@angular/common";
import {UserDto} from '../../../models/user-dto';
import {ApiService} from '../../../service/api/api.service';

@Component({
  selector: 'app-users',
  imports: [
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
    NgIf,
    MatHeaderCellDef
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

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
