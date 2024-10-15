import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  count: number

  constructor() {
    this.count = 0
  }

  clickHandler() {
    this.count++
  }

}

