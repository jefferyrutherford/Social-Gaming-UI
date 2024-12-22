import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  ngOnInit(): void {
  }
// https://discord.com/oauth2/authorize?client_id=1143744671235977287&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fprofile&scope=identify
}
