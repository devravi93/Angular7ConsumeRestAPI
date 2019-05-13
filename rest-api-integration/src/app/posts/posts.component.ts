import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { PostsModel } from '../models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : PostsModel[];

  constructor(private service : PostService) { }

  ngOnInit() {
    this.service.getAllPosts().subscribe(response=>{
      this.posts = response;
      console.log(this.posts);
    });
  }

}
