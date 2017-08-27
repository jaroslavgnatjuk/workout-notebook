import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {ExerciseFact} from './ExerciseFact';
import {Exercise} from './Exercise';

@Injectable()
export class DbServiceService {

  constructor(private http: Http) { }

  getExercises() {
    return this.http.get('/api/exercises');
  }

  getExerciseFacts() {
    return this.http.get('/api/exercise-facts-today');
  }

  getExerciseFactsByExerciseId(exerciseId) {
    return this.http.get('/api/exercise-facts/'+exerciseId);
  }

  deleteFact(id) {
    return this.http.delete('/api/exercise-facts?id=' + id);
  }

  getFactsByDate(dt) {
    return this.http.get('/api/exercise-facts?dt=' + encodeURIComponent(dt));
  }

  getFactsAllDays() {
    return this.http.get('/api/exercise-facts-all-days');
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

    return this.http.post('/api/exercise-facts', body, options);
  }

  editExercise(exercise: Exercise) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(exercise);

    return this.http.put('/api/exercise', body, options)
  }

  addExercise(category, title) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(`/api/exercise?title=${encodeURIComponent(title)}&category=${encodeURIComponent(category)}`, {}, options);
  }

}
