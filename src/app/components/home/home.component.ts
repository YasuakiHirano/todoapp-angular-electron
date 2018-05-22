import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Task } from './task';
import { FsService } from 'ngx-fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('input_panel_state', [
      state('inactive', style({
        height: '0px',
        display: 'none'
      })),
      state('active',   style({
        height: 'auto',
        display: 'block'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  content: string = '';
  taskAry: Task[] = [];
  completeCnt: number = 0;
  input_panel_state: string = 'active';

  constructor(private _fsService: FsService) { }

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

  toggleInputPanel() {
    this.input_panel_state = this.input_panel_state === 'active' ? 'inactive' : 'active';
  }

  onOutFile() {
    if (-1 < window.navigator.userAgent.indexOf("Electron")) {
      let dt = new Date();
      let month = dt.getMonth()+1;
      let day = dt.getDate();
      let year = dt.getFullYear();
      const fs = this._fsService.fs as any;

      let text_data = '';
      for (let i = 0; i < this.taskAry.length;i++) {
        text_data += this.taskAry[i].content + "\n";
      }

      fs.writeFileSync( "todo_"+year+month+day+".txt" , text_data);
    } else {
      alert("デスクトップ版以外は実行できません。");
    }
  }
}
