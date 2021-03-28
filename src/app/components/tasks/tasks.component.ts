import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private localDataService: LocalDataService) {}

  tasks: Task[] = [];

  displayedColumns: string[] = ['name', 'duration'];

  ngOnInit(): void {
    this.localDataService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data;
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
