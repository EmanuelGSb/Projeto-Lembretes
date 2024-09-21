import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../../reminder';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private apiUrl = 'http://localhost:3000/reminder'

  constructor(private http: HttpClient) { }

  getReminders() : Observable<Reminder[]>{
    return this.http.get<Reminder[]>(this.apiUrl);
  }

  deleteReminder(reminder: Reminder) : Observable<Reminder>{
    return this.http.delete<Reminder>(`${this.apiUrl}/${reminder.id}`);
  }

  updateReminder(reminder: Reminder) : Observable<Reminder> {
    return this.http.put<Reminder>(`${this.apiUrl}/${reminder.id}`, reminder);
  }

  AddReminder(reminder: Reminder) : Observable<Reminder>{
    return this.http.post<Reminder>(`${this.apiUrl}`, reminder);
  }
}

