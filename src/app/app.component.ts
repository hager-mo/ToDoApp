import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputChildComponent } from './input-child/input-child.component';
import { OuputChildComponent } from './ouput-child/ouput-child.component';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputChildComponent, OuputChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';

  tasks: Todo[] = [];

  receivedFromChiled(task : any){
    let obj =  { task : task};
    this.tasks.push(obj);
    console.log(task);
    
  }
}
