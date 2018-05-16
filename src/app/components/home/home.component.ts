import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id : int = 0;
  content: string = '';
  taskAry: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

  onAddTask() {
    let new_task = new Task(this.id, this.content);
    this.taskAry.push(new_task);
  }

  onDeleteTask(task) {
    let index = this.taskAry.indexOf(task);
    this.taskAry.splice(index, 1);
  }
}
