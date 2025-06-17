import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MyUserPageComponent} from './components/my-user-page/my-user-page.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'myUserPage', component: MyUserPageComponent}
];
