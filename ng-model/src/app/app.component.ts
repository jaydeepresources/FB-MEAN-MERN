import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fruits: string[]
  newFruit: string

  constructor() {
    this.fruits = ['apple', 'guava', 'peach', 'watermelon', 'mango', 'litchi']
    this.newFruit = ''
  }

  deleteFruit(index: number) {
    this.fruits.splice(index, 1)
  }

  addFruit() {
    this.fruits.push(this.newFruit)
    this.newFruit = ''
  }

}