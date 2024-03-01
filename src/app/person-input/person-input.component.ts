import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-input.component.html',
  styleUrl: './person-input.component.css',
})
export class PersonInputComponent {
  enteredPersonName: string;
  // @Output() personCreate: EventEmitter<string>;

  constructor(private personsService: PersonsService) {
    this.enteredPersonName = 'Dung';
    // this.personCreate = new EventEmitter<string>();
  }

  onCreatePerson(name: string) {
    // console.log(name);
    // this.enteredPersonName = 'Dung Ho';
    // this.personCreate.emit(name);
    this.personsService.addPerson(name);
  }
}
