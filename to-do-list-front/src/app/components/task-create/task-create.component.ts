import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit{

  @Output() loadTasksEvent = new EventEmitter<boolean>();

  task!: Task;

  tasksForm!: FormGroup;

  constructor(
              private taskService: TaskService, 
              private router: Router,
              private fb: FormBuilder
              ) { }

  ngOnInit(): void {
    this.tasksForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['pending', Validators.required]
    });
  }

  get title(){
    return this.tasksForm.get('title')!;
  }
  get description(){
    return this.tasksForm.get('description')!;
  }

  onSubmit(){
    if(this.tasksForm.invalid){
      return;
    }

    console.log(this.tasksForm.value);
    this.taskService.createTask(this.tasksForm.value).subscribe(() => {
      location.reload();
      this.router.navigate(['']); 
      this.loadTasksEvent.emit(true);
    });


   
  };
}
