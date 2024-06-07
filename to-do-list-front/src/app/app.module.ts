import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './home/task-list/task-list.component';
import { EditPopupComponent } from './components/popup/edit-popup/edit-popup.component';
import { ShowDescriptionPopupComponent } from './components/popup/show-description-popup/show-description-popup.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    EditPopupComponent,
    ShowDescriptionPopupComponent,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
