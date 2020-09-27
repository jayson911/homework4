import { Component } from '@angular/core';
import {User} from './models/User';
import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework4';
  outgoingUsers: User[];
  outgoingPosts: Post[];
  // outgoingComments: Comment[];
}
