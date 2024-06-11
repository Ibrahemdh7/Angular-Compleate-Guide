import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { TasksComponent } from "./tasks.component";
import { sharedModule } from "../app/shared/sahred.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TaskComponent,
        NewTasksComponent,
        TasksComponent,
    ],
    exports: [
        TasksComponent,
    ],
    imports: [sharedModule,CommonModule,FormsModule]
})

export class  TasksModule{
    
}