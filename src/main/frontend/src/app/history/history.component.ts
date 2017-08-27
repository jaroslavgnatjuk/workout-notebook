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

  showHistory(dt) {
    this.dbService.getFactsByDate(dt).subscribe(resp => {
      this.exerciseFacts = resp.json();
      console.log(this.exerciseFacts);
    });
  }

}
