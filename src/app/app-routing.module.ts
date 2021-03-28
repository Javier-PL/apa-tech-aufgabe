import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonsComponent } from './components/persons/persons.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TasksComponent } from './components/tasks/tasks.component';

const appRoutes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'persons/:id/details', component: PersonDetailsComponent },
  { path: 'tasks/:id/details', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
