import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MyUserPageComponent} from './components/my-user-page/my-user-page.component';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/admin/users/users.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'myUserPage', component: MyUserPageComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'users', component: UsersComponent}
    ]
  },
  {path: 'home', component: HomeComponent}
];
