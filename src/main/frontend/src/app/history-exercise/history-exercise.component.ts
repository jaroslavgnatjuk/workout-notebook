import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbServiceService} from '../db-service.service';
import {ExerciseFact} from '../ExerciseFact';

@Component({
  selector: 'app-history-exercise',
  templateUrl: './history-exercise.component.html',
  styleUrls: ['./history-exercise.component.scss']
})
export class HistoryExerciseComponent implements OnInit {
  exerciseFacts: ExerciseFact[];

  constructor(private activatedRoute: ActivatedRoute,
              private dbService: DbServiceService) {
  }

  getDate(dtParam) {
    let dt = new Date(dtParam);
    return `${dt.getFullYear()}${dt.getMonth()}${dt.getDate()}`;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let exerciseId = params.exerciseId;

      this.dbService.getExerciseFactsByExerciseId(exerciseId).subscribe(resp => {
        this.exerciseFacts = resp.json();
      });
    });
  }

}
