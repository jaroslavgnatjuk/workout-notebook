import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TrainComponent } from './train/train.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {DbServiceService} from './db-service.service';
import { HistoryExerciseComponent } from './history-exercise/history-exercise.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/train',
    pathMatch: 'full'
  },
  {path: 'train', component: TrainComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'history-exercise', component: HistoryExerciseComponent},
  {
    path: '**',
    redirectTo: '/train'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HistoryComponent,
    TrainComponent,
    HeaderComponent,
    HistoryExerciseComponent
  ],
  bootstrap: [AppComponent],
  providers: [DbServiceService]
})
export class AppModule { }
