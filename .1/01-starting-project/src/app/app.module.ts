import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "../Header/header.component";
import { UserComponent } from "../user/user.component";
import { TasksComponent } from "../tasks/tasks.component";
import { TaskComponent } from "../tasks/task/task.component";
import { NewTasksComponent } from "../tasks/new-tasks/new-tasks.component";
import { DatePipe } from "@angular/common";
import { sharedModule } from "./shared/sahred.module";
import { TasksModule } from "../tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, 
        HeaderComponent, 
        UserComponent,
       ],
    bootstrap: [AppComponent],
    imports: [sharedModule,BrowserModule,DatePipe,TasksModule]
})

export class AppModule{

}