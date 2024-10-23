import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  users: any[]

  constructor() {
    this.users = []
  }

  getUsers() {
    // Fetch the users from https://jsonplaceholder.typicode.com/users
    fetch('https://jsonplaceholder.typicode.com/users') // bring data using rest api call
      .then(response => response.json()) // convert response into json
      .then(data => this.users = data) // save the data
  }

  ngOnInit() {
    // called when the AppComponent is loaded in browser
    this.getUsers()
  }

}