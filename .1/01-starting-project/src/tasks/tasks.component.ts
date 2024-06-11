import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { TaskData } from 'zone.js/lib/zone-impl';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
@Input({required : true}) name!:string;
@Input() userId!:string;
isAddingTask = false;
constructor(private tasksService : TasksService){
  
}


get selectedUserTask(){
   return  this.tasksService.getUserTasks(this.userId)
}



onStartTaskStart(){
this.isAddingTask = true
}

onCloselAddTask(){
  this.isAddingTask = false
  }
onAddTask(taskData:NewTaskData){
  return  this.tasksService.addTask

this.isAddingTask= false
}
}
