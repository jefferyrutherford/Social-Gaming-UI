import { Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {UsersComponent} from "./users/users.component";

export const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UsersComponent}
];
