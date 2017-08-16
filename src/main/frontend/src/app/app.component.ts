import { Component } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Exercise} from './Exercise';
import {ExerciseFact} from './ExerciseFact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exercises: Exercise[];
  exerciseFacts: ExerciseFact[];

  constructor(private http: Http) {}

  getExercises() {
    this.http.get('/api/exercises?dt=20170101').subscribe(result => {
      this.exercises = result.json();
      console.log(result);
    });
  }

  getExerciseFacts(dt) {
    this.http.get('/api/exercise-facts?dt='+dt).subscribe(result => {
      this.exerciseFacts = result.json();
      console.log(result);
    });
  }

  addExerciseFact(exerciseFact) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify(exerciseFact);

    this.http.post('/api/exercise-facts', body, options).subscribe(result => {
      console.log(result);
    });
  }

}
