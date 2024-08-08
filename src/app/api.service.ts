import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './profile/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getNumbers() {
    return [1, 2, 4, 5]
  }

  getPosts(data: Post) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", data)
  }
}
