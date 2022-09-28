import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheme, IPost } from '../shared/interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getAllThemes(): Observable<ITheme[]> {
    const url = `${apiUrl}/themes`;

    return this.http.get<ITheme[]>(url);
  }

  getThemeById(id: string): Observable<ITheme<IPost>> {
    const url = `${apiUrl}/themes/${id}`;

    return this.http.get<ITheme<IPost>>(url);
  }
}
