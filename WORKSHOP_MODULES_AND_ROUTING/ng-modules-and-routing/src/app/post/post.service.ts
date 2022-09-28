import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../shared/interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  getPosts(limit: number): Observable<IPost[]> {
    const url = `${apiUrl}/posts?limit=${limit}`;

    return this.http.get<IPost[]>(url);
  }
}
