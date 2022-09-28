import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheme } from './interfaces';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  getAllThemes(): Observable<ITheme[]> {
    const url = 'http://localhost:3000/api/themes';

    return this.http.get<ITheme[]>(url);
  }
}
