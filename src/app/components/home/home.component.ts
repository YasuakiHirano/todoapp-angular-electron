import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: string = '';
  taskAry: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

  onAddTask() {
    let new_task = new Task(this.content);
    this.taskAry.push(new_task);
    console.log("test");
    console.log(this.content);
  }
}
