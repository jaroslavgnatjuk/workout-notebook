import {Component, OnInit} from '@angular/core';
import {Exercise} from '../Exercise';
import {ExerciseFact} from '../ExerciseFact';
import {DbServiceService} from '../db-service.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {
  exercises: Exercise[];
  categories: string[];
  exercisesMap: any = [];
  exerciseFacts: ExerciseFact[];
  selectedExerciseId: number;
  selectedCategory = 'грудь';
  count: number;
  weight: number;

  constructor(private dbService: DbServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.refreshExercises();
    this.refreshFacts();
  }

  refreshExercises() {
    this.dbService.getExercises().subscribe(result => {
      this.exercises = result.json();
      console.log(result);

      this.exercisesMap = this.exerciseToMap(this.exercises);
      this.categories = Object.keys(this.exercisesMap);
    });
  }

  refreshFacts() {
    this.dbService.getExerciseFacts().subscribe(result => {
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

  deleteFact(id) {
    return this.dbService.deleteFact(id).subscribe(() => this.refreshFacts());
  }

  addExerciseFact(exerciseId, count, weight) {
    if (exerciseId === undefined) {
      alert('Не выбрано упражнение');

      return;
    }

    this.dbService.addExerciseFact(exerciseId, count, weight).subscribe(result => {
      console.log(result);
      this.refreshFacts();
    });
  }

  editExercise(id) {
    let curExercise = this.exercises.filter(ex => ex.id == id)[0];
    let title = prompt('Введите название упражнения', curExercise.title);

    if (!curExercise || !title) {
      return;
    }

    let exercise: Exercise = {
      title: title,
      category: curExercise.category,
      id: curExercise.id
    };

    this.dbService.editExercise(exercise).subscribe(result => {
      console.log(result);
      this.refreshExercises();
    });
  }

  showHistory(exerciseId) {
    if (!exerciseId) {
      alert('Выберите упражнение');
      return;
    }
    this.router.navigate(['history-exercise'], {queryParams: {exerciseId: exerciseId}});
  }

  addExercise() {
    let title = prompt('Введите название упражнения');

    if (!title) {
      return;
    }

    this.dbService.addExercise(this.selectedCategory, title).subscribe(result => {
      console.log(result);
      this.refreshExercises();
    });

  }

  copyFact(id, count, weight) {
    let exercise = this.getExerciseById(id);
    this.selectedExerciseId = id;
    this.selectedCategory = exercise.category;
    this.count = count;
    this.weight = weight;
    //this.dbService.addExerciseFact(id, count, weight).subscribe(() => this.refreshFacts());
  }

}

