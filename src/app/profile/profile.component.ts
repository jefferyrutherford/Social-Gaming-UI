import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'ProfileComponent',
  imports: [
    JsonPipe
  ],
  template: ``
})
export class ProfileComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('user/getAll').subscribe(response => {
      this.data = response;
    });
  }
}
