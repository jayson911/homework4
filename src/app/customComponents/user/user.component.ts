import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {User} from '../../models/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Posts: Post[];

  @Input()
  user: User;

  constructor(private postService: PostService) {
    this.postService.allPosts().subscribe(posts => {
      this.Posts = posts;
    });
  }

  ngOnInit(): void {
  }

}
