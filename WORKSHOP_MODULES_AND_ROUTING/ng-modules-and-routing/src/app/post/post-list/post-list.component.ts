import { Component, OnInit } from '@angular/core';
import { IPost } from '../../shared/interfaces';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public postList: IPost[];
  public limit: number = 5;

  constructor( public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(this.limit).subscribe(postList => {
      this.postList = postList;
    })
  }

}
