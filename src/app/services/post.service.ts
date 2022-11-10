import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _posts: BehaviorSubject<Post[]>;

  private dataStore: {
    posts: Post[]
  }
  constructor(private http: HttpClient) {
    this.dataStore = { posts: [] };
    this._posts = new BehaviorSubject<Post[]>([]);
  }

  get posts(): Observable<Post[]> {
    return this._posts.asObservable();
  }


  postById(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  loadAll() {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Post[]>(postsUrl)
    .subscribe(data => {
      this.dataStore.posts = data;
      this._posts.next(Object.assign({}, this.dataStore).posts);
    }, error => {
      console.log("Failed to fetch blogs")
    });
  }
}
