import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public postList: IPost[];
  public limit: number = 5;

  constructor( public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(this.limit).subscribe(postList => {
      this.postList = postList;
    })
  }

}
