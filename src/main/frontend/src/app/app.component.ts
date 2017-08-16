import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exercises: any[];

  constructor(private http: Http) {}

  getExercises() {
    this.http.get('/api/exercises?dt=20170101').subscribe(result => {
      this.exercises = result.json();
      console.log(result);
    });
  }

}
