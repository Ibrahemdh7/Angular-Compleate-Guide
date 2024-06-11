import { Component,  Input,  inject,  } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../app/shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
@Input() task!:Task
private tasksSerivce = inject(TasksService)

onCompleteTask(){
    this.tasksSerivce.removeTask(this.task.id)
}
}
