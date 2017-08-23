import {Component, OnInit} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Exercise} from './Exercise';
import {ExerciseFact} from './ExerciseFact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  exercises: Exercise[];
  categories: string[];
  exercisesMap: any = [];
  exerciseFacts: ExerciseFact[];
  selectedExerciseId: number;
  selectedCategory: string = 'грудь';
  count: number;
  weight: number;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.refreshExercises();
    this.refreshFacts();
  }

  refreshExercises() {
    this.getExercises().subscribe(result => {
      this.exercises = result.json();
      console.log(result);

      this.exercisesMap = this.exerciseToMap(this.exercises);
      this.categories = Object.keys(this.exercisesMap);
    });
  }

  refreshFacts() {
    this.getExerciseFacts().subscribe(result => {
      this.exerciseFacts = result.json();
      console.log(result);
    });
  }

  getExerciseById(id) {
    return this.exercises && this.exercises.filter(item => item.id === id)[0];
  }

  exerciseToMap(exercises: Exercise[]) {
    let exercisesMap = {};

    exercises.forEach(item => {
      if (!exercisesMap[item.category]) {
        exercisesMap[item.category] = [];
      }
      exercisesMap[item.category].push(item);
    });

    return exercisesMap;
  }

  getExercises() {
    return this.http.get('/api/exercises');
  }

  getExerciseFacts() {
    return this.http.get('/api/exercise-facts-today');
  }

  deleteFact(id) {
    return this.http.delete('/api/exercise-facts?id='+id).subscribe(() => this.refreshFacts());
  }

  addExerciseFact(exerciseId, count, weight) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let exerciseFact: ExerciseFact = {
      id: 0,
      exerciseId: exerciseId,
      count: count,
      weight: weight
    };

    let body = JSON.stringify(exerciseFact);

    this.http.post('/api/exercise-facts', body, options).subscribe(result => {
      console.log(result);
      this.refreshFacts();
    });
  }

  editExercise(id) {
    let exercise = this.exercises.filter(ex => ex.id == id)[0];
    let title = prompt('Введите название упражнения', exercise.title);

    if (!exercise || !title) {
      return;
    }

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({
      id: exercise.id,
      category: exercise.category,
      title: title
    });

    this.http.put('/api/exercise', body, options).subscribe(result => {
      console.log(result);
      this.refreshExercises();
    });
  }

  addExercise() {
    let title = prompt('Введите название упражнения');

    if (!title) {
      return;
    }

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    this.http.post(`/api/exercise?title=${encodeURIComponent(title)}&category=${encodeURIComponent(this.selectedCategory)}`, {}, options).subscribe(result => {
      console.log(result);
      this.refreshExercises();
    });

  }


}
