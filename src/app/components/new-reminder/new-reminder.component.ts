import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reminder } from '../../../reminder';
import { emit } from 'process';
import { BtnComponent } from '../btn/btn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-reminder',
  standalone: true,
  imports: [FormsModule, BtnComponent, CommonModule],
  templateUrl: './new-reminder.component.html',
  styleUrl: './new-reminder.component.css'
})
export class NewReminderComponent {
  @Output() onAddReminder = new EventEmitter<Reminder>();

  reminder: string = '';
  categoria: string = '';
  concluido: boolean = false;
  showNewReminder: boolean= false;

  ChangeView(value: boolean){
    this.showNewReminder = value;
  }

  onSubmit(){
   if(!this.reminder){
    alert('Preencher lembrete')
    return;
   }

   const newReminder = {
    reminder: this.reminder,
    categoria: this.categoria,
    concluido: this.concluido
   }

   this.onAddReminder.emit(newReminder);

   this.reminder ='';
   this.categoria ='';
   this.concluido = false;
  }
}
