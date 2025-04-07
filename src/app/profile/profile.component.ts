import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {PlayerCard, User} from "../../services/serviceModel";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userList: User[] = [];
  constructor(private us : UserService) {
  }
  ngOnInit(): void {

    this.us.getAllUsers().subscribe(x=> {
      this.userList = x;
    })
  }
// https://discord.com/oauth2/authorize?client_id=1143744671235977287&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fprofile&scope=identify
  protected readonly JSON = JSON;
}
