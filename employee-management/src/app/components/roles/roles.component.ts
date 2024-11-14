import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = 'John';
  lastName: string = 'Doe';

  constructor() {
    console.log('RolesComponent constructor called');
  }

  gender : string = 'male';
  age : number = 30;
  address : string = '123 Main St, City, State, 12345';
  
}
