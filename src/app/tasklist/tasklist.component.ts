import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-tasklist',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

    newTask: string = "text from component";

    tasks:any[] = [
      {
        id: 1,
        taskTitle: 'Water the lawn',
        isComplete: false
      },
      {
        id: 2,
        taskTitle: 'Pick Groceries',
        isComplete: false
      },
      {
        id: 3,
        taskTitle: 'Pick mail',
        isComplete: false
      },
      {
        id: 4,
        taskTitle: 'Pick kids from school',
        isComplete: false
      }
    ];

    showNewTask(){
      alert(this.newTask);
    }

    addNewTask(){
      let newTask = {
        id: this.tasks.length + 1,
        taskTitle: this.newTask,
        isComplete: false
      }
      // console.log(newTask);
      this.tasks.push(newTask);
    }

    deleteTask(pIndex: number){
      this.tasks.splice(pIndex, 1);
      console.log('deleted');
    }

    changeCompleteStatus(event: Event, index:number){
      // alert((event.target as HTMLInputElement).checked);
      let checkBoxStatus = (event.target as HTMLInputElement).checked;
      // console.log(index);
      if(checkBoxStatus){
        this.tasks[index].isComplete = true;
      }
      else{
        this.tasks[index].isComplete = false;
      }

      // console.log(this.tasks);

    }


}
