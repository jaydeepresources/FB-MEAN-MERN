import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  flag: boolean

  constructor() {
    this.flag = true
  }

  hide() {
    this.flag = false
  }

  show() {
    this.flag = true
  }

  toggle() {
    this.flag = !this.flag
  }

}

