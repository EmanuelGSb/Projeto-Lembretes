import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reminder } from '../../../reminder';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-reminder-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './reminder-item.component.html',
  styleUrl: './reminder-item.component.css'
})
export class ReminderItemComponent {
  @Input() reminder!:Reminder;
  @Output() onDeleteReminder = new EventEmitter<Reminder>();
  @Output() onToggleConcluido = new EventEmitter<Reminder>();

  faTimes = faTimes

  onDelete(reminder:Reminder){
    this.onDeleteReminder.emit(reminder);
  }

  onToggle(reminder: Reminder){
    this.onToggleConcluido.emit(reminder);
  }
}
