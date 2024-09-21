import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {

  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }
}
