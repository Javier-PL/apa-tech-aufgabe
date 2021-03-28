import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PersonsComponent } from './components/persons/persons.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { LocalDataService } from './services/local-data.service';



@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    TasksComponent,
    PersonDetailsComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
  providers: [LocalDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
