import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  allPosts(): Observable<Post[]>{
   return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }
}
