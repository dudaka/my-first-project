import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './person-input/person-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonsComponent, PersonInputComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  persons = ['one', 'two', 'three', 'four'];

  onPersonCreated(name: string) {
    // console.log(name);
    this.persons.push(name);
  }
}
