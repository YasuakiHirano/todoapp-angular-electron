export class Task {
  id: number;
  content: string;
  task_status: string;

  constructor(content){
    this.content = content;
    this.task_status = "dark";
  }
}
