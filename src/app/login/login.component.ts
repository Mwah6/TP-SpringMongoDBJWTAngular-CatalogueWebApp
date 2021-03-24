import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(data: any): void {
    this.authService.login(data)
    .subscribe(resp => {
      console.log(resp);
      console.log(resp.headers.get('Authorization'));
      const jwt = resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.router.navigateByUrl('/');
    }, err => {
      console.log(err);
    });
  }
  isAdmin(): boolean{
    return this.authService.isAdmin();
  }
  isUser(): boolean{
    return this.authService.isUser();
  }
}
