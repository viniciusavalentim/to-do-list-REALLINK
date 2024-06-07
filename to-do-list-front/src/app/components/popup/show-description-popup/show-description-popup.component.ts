import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-show-description-popup',
  templateUrl: './show-description-popup.component.html',
  styleUrls: ['./show-description-popup.component.css']
})
export class ShowDescriptionPopupComponent implements OnInit {

  @Input() TaskID?: Task;
  @Output() closeDescriptionEvent = new EventEmitter<boolean>();
  @Output() loadTasksEvent = new EventEmitter<boolean>();
  
  tasksForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {

  }
  closeModal(): void {
    this.closeDescriptionEvent.emit(true);
  }

}