import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fruits: string[]

  constructor() {
    this.fruits = ['apple', 'guava', 'peach', 'watermelon', 'mango', 'litchi']
  }

  deleteFruit(index: number) {
    this.fruits.splice(index, 1)
  }

}