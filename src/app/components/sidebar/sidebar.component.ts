import {Component, OnInit} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Router, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs';
import {NgForOf} from '@angular/common';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    NgForOf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  currentUrl: string = '';
  links: { label: string; path: string }[] = [];

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
        this.updateLinks(this.currentUrl);
      });

    // Initialize links on load
    this.updateLinks(this.router.url);
  }


  updateLinks(url: string) {
    // ToDo Clean this up a bit
    if (url.startsWith('/admin')) {
      this.links = [
        {label: 'Dashboard', path: '/admin/dashboard'},
        {label: 'Users', path: '/admin/users'},
        {label: 'Settings', path: '/admin/settings'},
      ];
    } else if (url.startsWith('/myUserPage')) {
      this.links = [
        {label: 'Update User Page', path: '/myUserPage/UpdateUserPage'},
      ];
    } else {
      // Default links
      this.links = [
        {label: 'Home', path: '/home'},
        {label: 'Extra', path: '/extra'},
      ];
    }
  }

  logOut(): void {
    this.auth.logout();
  }

}
