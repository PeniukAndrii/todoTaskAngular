import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-solo',
  templateUrl: './todo-solo.component.html',
  styleUrls: ['./todo-solo.component.css']
})
export class TodoSoloComponent implements OnInit {

  kek: number;
  constructor() {
     this.kek = Math.floor(Math.random() * Math.floor(100));
  }

  ngOnInit(): void {
    this.kek = Math.floor(Math.random() * Math.floor(100));
  }

}
