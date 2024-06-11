import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css',
})
export class NewTasksComponent {
  @Output() close = new EventEmitter<void>();
  @Input() userId!: string;
  enterdTitle = '';
  enterSummary = '';
  enterDate = '';
  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enterdTitle,
        summry: this.enterSummary,
        date: this.enterDate,
      },
      this.userId
    );
  }
}
