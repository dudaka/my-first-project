import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  personsChanged: Subject<string[]>;
  persons: string[];

  constructor() {
    this.persons = ['one', 'two', 'three'];
    this.personsChanged = new Subject<string[]>();
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter((personName) => personName !== name);
    this.personsChanged.next(this.persons);
  }
}
