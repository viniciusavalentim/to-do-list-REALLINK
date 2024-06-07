import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  
  tasks!: Task[];
  
  TaskID?: Task;
  showModal = false;
  showDescription = false;

  showPending: boolean = false;
  showCompleted: boolean = false;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
      this.showPending = this.tasks.some(task => task.status === 'pending');
      this.showCompleted = this.tasks.some(task => task.status === 'completed');

    });
  }

  get pendingTasks() {
    return this.tasks.filter(task => task.status === 'pending');
  }

  get completedTasks() {
    return this.tasks.filter(task => task.status === 'completed');
  }

  deleteTask(task: Task){
    const id = Number(task.id);
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleModalEdit(task: Task): void {
    this.showModal = !this.showModal;
    this.TaskID = task;
  }

  toggleModalDescription(task: Task): void {
    this.showDescription = !this.showDescription;
    this.TaskID = task;
  }

  performAction(task: Task){
    task.status = 'completed';
    this.taskService.updateTask(task).subscribe(data =>{
      this.loadTasks();
    });
  };
  
  handleCloseModal(isClosed: boolean): void {
    this.showModal = false;
    document.body.classList.remove('modal-open');
  }

  handleCloseDescription(isClosed: boolean): void {
    this.showDescription = false;
  }


  
  loadTasksWhenCreate(isClosed: boolean){
    this.loadTasks();
  };

  loadTasksWhendEdit(isClosed: boolean) {
    this.loadTasks();
  };

}
