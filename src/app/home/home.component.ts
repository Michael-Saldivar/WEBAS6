import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: PostService) { }

  blogPosts: Array<BlogPost>;

  private post;

  ngOnInit(): void {
    this.post = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }


}
