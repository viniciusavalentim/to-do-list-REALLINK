import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit{

  @Input() TaskID?: Task;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() loadTasksEvent = new EventEmitter<boolean>();


  tasksForm!: FormGroup;

  constructor(private taskService: TaskService, private router: Router,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tasksForm = this.fb.group({
      id: [this.TaskID?.id, Validators.required],
      title: [this.TaskID?.title, Validators.required],
      description: [this.TaskID?.description, Validators.required],
      status: ['pending', Validators.required]
    });
  }

  closeModal(): void {
    this.closeModalEvent.emit(true);
  }

  onSubmit() {
    console.log(this.tasksForm.value);
    this.taskService.updateTask(this.tasksForm.value).subscribe(() => {
      this.router.navigate(['/']);
      this.closeModalEvent.emit(true);
      this.loadTasksEvent.emit(true);
    });
  }
}