import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpringMongoDBJWTAngular-CatalogueWebApp';
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.loadToken();
  }
  isAdmin(): boolean{
    return this.authService.isAdmin();
  }
  isUser(): boolean{
    return this.authService.isUser();
  }
  isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }
  onLogout(): void {
    this.authService.logout();
  }
}
