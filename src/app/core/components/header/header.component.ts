import { NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService = inject(AuthService);
  @Input({ required: true }) userName: string = '';
  @Input({ required: true }) userProfileImg: string = '';

  navList: string[] = [
    'Home',
    'TV Shows',
    'News & Popular',
    'My List',
    'Browse by Language',
  ];

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.authService.signOut();
  }
}
