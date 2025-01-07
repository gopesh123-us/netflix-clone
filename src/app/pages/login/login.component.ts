declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '418707408157-3s1jmbejkvtl8s33j7lb4vivctreq22s.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response),
    });

    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 300,
      } // customization attributes
    );
    //google.accounts.id.prompt();
  }
  handleCredentialResponse(response: any) {
    if (response) {
      //decode JWT Token
      const payload = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
      //then navigate to home page.
      this.router.navigate(['browse']);
    }
  }
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
