import { Component,Input,computed,input,signal,output, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../app/shared/card/card.component";
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
@Input({required:true}) user!: User
@Input({required:true}) selected!: boolean
@Output() select= new EventEmitter();

get imagePath()   {
    return 'assets/users/' + this.user.avatar
}

  onSelctUser(){
this.select.emit(this.user.id)
  }
}
