import { Component, inject } from '@angular/core';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-browse',
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  authService = inject(AuthService);

  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  picture = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.authService.signOut();
  }
}
