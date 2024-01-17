import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.css'
})
export class InputChildComponent {
  // ngOnInit() {
  //   this.inputField = this.inputField; // Access the ViewChild reference
  // }
  // @ViewChild('inputField') inputField: ElementRef | undefined;
  
  // @Output() sendToParent = new EventEmitter();
  // addTask(): void {
    //   const value = this.inputField!.nativeElement.value;
    //   this.sendToParent.emit(value);
    // }
  task = '';
  @Output() sended = new EventEmitter<string>();
    
  taskadded(task:any){
    this.sended.emit(task);
    console.log(task.valueOf());
  }
}
