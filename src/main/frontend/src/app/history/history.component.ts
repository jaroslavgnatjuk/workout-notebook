import {Component, OnInit} from '@angular/core';
import {DbServiceService} from '../db-service.service';
import {ExerciseFact} from '../ExerciseFact';
import {Exercise} from '../Exercise';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  days: any[] = [];
  selectedDay;
  exerciseFacts: ExerciseFact[];
  exercises: Exercise[];
  dt = new Date();

  constructor(private dbService: DbServiceService) {
  }

  ngOnInit() {
    this.dbService.getFactsAllDays().subscribe(resp => {
      this.days = resp.json();
    });

    this.dbService.getExercises().subscribe(result => {
      this.exercises = result.json();
    });
  }

  getExerciseById(id) {
    return this.exercises && this.exercises.filter(item => item.id === id)[0];
  }

  getDayOfWeek(dt) {
    const dayOfWeek = (new Date(dt.dt)).getDay();
    let result;

    switch (dayOfWeek) {
      case 1:
        result = 'понедельник';
        break;
      case 2:
        result = 'вторник';
        break;
      case 3:
        result = 'среда';
        break;
      case 4:
        result = 'четверг';
        break;
      case 5:
        result = 'пятница';
        break;
      case 6:
        result = 'суббота';
        break;
      case 0:
        result = 'воскресенье';
        break;
    }

    return result;
  }

  showHistory(dt) {
    this.dbService.getFactsByDate(dt).subscribe(resp => {
      this.exerciseFacts = resp.json();
    });
  }

}
