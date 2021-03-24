import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host = 'http://localhost:8080';
  public jwt: string;
  public username: string;
  public roles: Array<string>;

  constructor(private http: HttpClient) {
  }
  getAllCategories(): Observable<object> {
    return this.http.get(this.host + '/categories');
  }
  login(data: any): Observable<any> {
  return this.http.post(this.host + '/login', data, {observe: 'response'});
  // {observe: 'response'} est une option. Il dit ne convertit pas au format json mais donne moi toute la réponse http
  }
  saveToken(jwt: string): void {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }
  parseJWT(): void {
    const jwtHelper = new JwtHelperService();
    if (this.jwt !== null) {
    const jwtObject = jwtHelper.decodeToken(this.jwt);
    console.log(this.jwt);
    console.log(jwtObject);
    // le jwt devient un objet js
    this.username = jwtObject.obj;
    this.roles = jwtObject.roles;
    }
  }
  loadToken(): void {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }
  isAdmin(): boolean {
    return this.roles !== undefined && this.roles.indexOf('ADMIN') >= 0;
  }
  isUser(): boolean {
    return this.roles !== undefined && this.roles.indexOf('USER') >= 0;
  }
  isAuthenticated(): boolean{
    return this.roles !== undefined;
  }
  logout(): void {
    localStorage.removeItem('token');
    this.initParams();
  }
  initParams(): void {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined ;
  }
}
