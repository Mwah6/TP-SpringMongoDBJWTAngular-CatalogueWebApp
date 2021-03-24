import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host = 'http://localhost:8087';
  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }
  getAllCategories(): Observable<any> {
    return this.http.get(this.host + '/categories');
  }
  getRessource(url: string): Observable<object>{
    return this.http.get(url);
  }
  deleteRessource(url: string): Observable<object> {
    const headers = new HttpHeaders({authorization: this.authService.jwt});
    return this.http.delete(url, {headers});
  }
  postRessource(url: string, data: any): Observable<object> {
    const headers = new HttpHeaders({authorization: this.authService.jwt});
    return this.http.post(url, data, {headers});
  }
  patchRessource(url: string, data: any): Observable<object> {
    const headers = new HttpHeaders({authorization: this.authService.jwt});
    return this.http.patch(url, data, {headers});
  }
  putRessource(url: string, data: any): Observable<object> {
    const headers = new HttpHeaders({authorization: this.authService.jwt});
    return this.http.put(url, data, {headers});
  }
}
