import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { TasksComponent } from './components/tasks/tasks.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { LocalDataService } from './services/local-data.service';
import { TaskDetailsComponent } from './components/task-details/task-details.component';


const appRoutes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'persons/:id/details', component: PersonDetailsComponent },
  { path: 'tasks/:id/details', component: TaskDetailsComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    TasksComponent,
    PersonDetailsComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LocalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
