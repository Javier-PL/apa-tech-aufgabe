import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../models/person.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  constructor(private http: HttpClient) {}

  getPersons(): Observable<any> {
    return this.http.get('./assets/localdata/persons.json');
  }

  getPersonById(id: number) {
    return this.http.get<Array<Person>>('./assets/localdata/persons.json').pipe(
      map((items: Array<Person>) => {
        return items.find((item: Person) => {
          return item.id === id;
        });
      })
    );
  }

  getTasks(): Observable<any> {
    return this.http.get('./assets/localdata/tasks.json');
  }
  
  getTaskById(id: number) {
    return this.http.get<Array<Task>>('./assets/localdata/tasks.json').pipe(
      map((items: Array<Task>) => {
        return items.find((item: Task) => {
          return item.id === id;
        });
      })
    );
  }

  millisecondsToClock(ms: number) {
    let hours = Math.floor(ms / 3600000),
      minutes = Math.floor((ms % 3600000) / 60000),
      seconds = Math.floor(((ms % 360000) % 60000) / 1000);

    return hours + 'h:' + minutes + 'm:' + seconds + 's';
  }
}
