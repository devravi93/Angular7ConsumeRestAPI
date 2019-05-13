import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsModel } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { 

  }

  getAllPosts(){
    return this.httpClient.get<PostsModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
