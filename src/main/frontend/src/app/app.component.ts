import {Component, OnInit} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Exercise} from './Exercise';
import {ExerciseFact} from './ExerciseFact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  exercises: Exercise[];
  categories: string[];
  exercisesMap: any;
  exerciseFacts: ExerciseFact[];
  selectedExerciseTitle: string;
  selectedCategory: string;

  constructor(private http: Http) {}

  ngOnInit() {
    this.getExercises().subscribe(result => {
      this.exercises = result.json();
      console.log(result);

      this.exercisesMap = this.exerciseToMap(this.exercises);
      this.categories =Object.keys(this.exercisesMap);
    });
  }

  exerciseToMap(exercises: Exercise[]) {
    let exercisesMap = {};

    exercises.forEach(item => {
      if (!exercisesMap[item.category]) {
        exercisesMap[item.category] = [];
      }
      exercisesMap[item.category].push(item.title);
    });

    return exercisesMap;
  }

  getExercises() {
    return this.http.get('/api/exercises');
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
