import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  Users: User[];

  constructor(private userService: UserService) {
    this.userService.allUsers().subscribe(users => {
        this.Users = users;
      }
    );
  }

  ngOnInit(): void {
  }

}
