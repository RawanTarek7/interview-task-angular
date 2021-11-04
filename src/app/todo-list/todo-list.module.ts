import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GetActivityService } from '../Services/get-activity.service';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToDoListComponent],
  imports: [CommonModule, TodoListRoutingModule, MatCardModule, FormsModule],
  providers: [GetActivityService],
})
export class TodoListModule {}
