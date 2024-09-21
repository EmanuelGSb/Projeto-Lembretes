import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../services/reminder.service';
import { Reminder } from '../../../reminder';
import { CommonModule } from '@angular/common';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';
import { NewReminderComponent } from '../new-reminder/new-reminder.component';


@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [CommonModule, ReminderItemComponent, NewReminderComponent],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent implements OnInit {

  reminders: Reminder[] = [];
  
  constructor(private reminderService: ReminderService){}

  ngOnInit(): void{

    this.reminderService.getReminders().subscribe((data) => {
      this.reminders = data;
      console.log(data);
    });

  }

  AddReminder(reminder:Reminder) {
    this.reminderService.AddReminder(reminder).subscribe((reminder) =>{
      this.reminders.push(reminder);
    });
  }

  deleteReminder(reminder: Reminder){
    this.reminderService.deleteReminder(reminder).subscribe(() => (this.reminders = this.reminders.filter((r) => r.id !== reminder.id)));
  }

  toggleConcluido(reminder: Reminder){
    reminder.concluido = !reminder.concluido;
    this.reminderService.updateReminder(reminder).subscribe();
  }

}
