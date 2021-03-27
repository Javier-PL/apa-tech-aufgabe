import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from 'src/app/models/person.model';

import { LocalDataService } from 'src/app/services/local-data.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  person: Person = { id: -1, name: '', surname: '', tasksIds: [] };
  routeId: number;
  tasks: Task[] = [];

  constructor(
    private localDataService: LocalDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.routeId = parseInt(params['id']);

      this.localDataService.getPersonById(this.routeId).subscribe(
        (data: Person) => {
          this.person = data;
        },
        (err) => {
          console.log(err);
        }
      );
    });

    this.localDataService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data.filter((task) =>
          this.person.tasksIds.includes(task.id)
        );
        this.tasks.forEach(
          (task) =>
            (task.clock = this.localDataService.millisecondsToClock(
              task.duration
            ))
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
