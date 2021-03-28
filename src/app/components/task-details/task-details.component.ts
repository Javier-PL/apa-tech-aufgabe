import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { Task } from 'src/app/models/task.model';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task = {
    id: -1,
    name: '',
    duration: -1,
    personsIds: [],
    clock: '' 
  };
  routeId: number;
  persons: Person[] = [];

  constructor(
    private localDataService: LocalDataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.routeId = parseInt(params['id']);


        this.localDataService
          .getTaskById(this.routeId)
          .subscribe((data: Task) => {
            this.task = data;
            this.task.clock = this.localDataService.millisecondsToClock(
              this.task.duration
            );
          });
      },
      (err) => {
        console.log(err);
      }
    );

    this.localDataService.getPersons().subscribe(
      (data: Person[]) => {
        this.persons = data.filter((person) =>
          this.task.personsIds.includes(person.id)
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
