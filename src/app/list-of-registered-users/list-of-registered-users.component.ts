import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-registered-users',
  templateUrl: './list-of-registered-users.component.html',
  styleUrls: ['./list-of-registered-users.component.css']
})
export class ListOfRegisteredUsersComponent implements OnInit {

  userData = [];
  constructor() { }

  ngOnInit() {
  }
  
  getRegisteredUsers(event){
    this.userData.push(event);
    console.log(this.userData);

}

}
