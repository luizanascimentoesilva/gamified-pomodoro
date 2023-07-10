import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroComponent } from './timers/pomodoro/pomodoro.component';

const routes: Routes = [
  {
    path: 'pomodoro-timer',
    component: PomodoroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
