import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  getPosts(limit: number): Observable<IPost[]> {
    const url = `http://localhost:3000/api/posts?limit=${limit}`;

    return this.http.get<IPost[]>(url);
  }
}
