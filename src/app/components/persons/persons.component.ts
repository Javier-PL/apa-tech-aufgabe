import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  constructor(private localDataService: LocalDataService) { }

  persons: Person[] = [];

  displayedColumns: string[] = ['name', 'surname'];

  ngOnInit(): void {
    this.localDataService.getPersons().subscribe(
      (data: Person[]) => {
        this.persons = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
