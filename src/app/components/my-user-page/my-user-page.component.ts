import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ApiService} from '../../service/api/api.service';

@Component({
  selector: 'app-my-user-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './my-user-page.component.html',
  styleUrl: './my-user-page.component.css'
})
export class MyUserPageComponent implements OnInit{
  users: any
  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.apiService.get('admin/getUsers').subscribe(response => {
      this.users = response;
    });
  }
}
