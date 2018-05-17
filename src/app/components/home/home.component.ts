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
  completeCnt: number = 0;

  constructor() { }

  ngOnInit() {
    let task_data = JSON.parse(localStorage.getItem("task_data"));
    if(task_data != null) {
      this.taskAry = task_data;
    }
    this.taskCompleteCnt();
  }

  onAddTask() {
    let new_task = new Task(this.content);
    this.taskAry.push(new_task);
    this.taskSave();
  }

  onCheckTask(task) {
    if(task.task_status == "dark") {
      task.task_status = "success";
    } else {
      task.task_status = "dark";
    }
    this.taskSave();
    this.taskCompleteCnt();
  }

  onDeleteTask(task) {
    let index = this.taskAry.indexOf(task);
    this.taskAry.splice(index, 1);
    this.taskSave();
  }

  taskSave() {
    localStorage.setItem("task_data", JSON.stringify(this.taskAry));
  }

  taskCompleteCnt() {
    let cnt = 0;
    for (let i = 0; i < this.taskAry.length;i++) {
      if (this.taskAry[i].task_status == 'success') {
        cnt = cnt + 1;
      }
    }
    this.completeCnt = cnt;
  }
}
