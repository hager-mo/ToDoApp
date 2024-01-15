import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ouput-child',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ouput-child.component.html',
  styleUrl: './ouput-child.component.css'
})
export class OuputChildComponent {
  @Input() task : any;
}
