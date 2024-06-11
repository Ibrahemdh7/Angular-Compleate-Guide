import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enterdInitialInvensment = '0'
enterdAnnualInvensment: any;
enterdExpectedReturn: any;
enterdDuration: any;
onSubmit(){
console.log(`First ${this.enterdInitialInvensment} Second  
  ${this.enterdAnnualInvensment} Third
   ${this.enterdExpectedReturn} Forth ${this.enterdDuration}`)
}
}
