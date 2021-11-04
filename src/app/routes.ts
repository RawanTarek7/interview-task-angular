import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { ToDoListComponent } from './todo-list/to-do-list/to-do-list.component';
export const allAppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'todo', component: ToDoListComponent },
  // {
  //   path: 'todo',
  //   loadChildren: () =>
  //     import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  // },import { ToDoListComponent } from './todo-list/to-do-list/to-do-list.component';

  { path: '**', component: PageNotFoundComponent },
];
