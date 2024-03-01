import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { PersonsService } from '../persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css',
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList!: string[];

  private personsSubscription!: Subscription;

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    // console.log(this.personList);
    this.personList = this.personService.persons;
    this.personsSubscription = this.personService.personsChanged.subscribe(
      (persons: string[]) => {
        this.personList = persons;
      }
    );
  }

  ngOnDestroy(): void {
    this.personsSubscription.unsubscribe();
  }

  onClick(name: string) {
    // console.log(name);
    this.personService.removePerson(name);
  }
}
