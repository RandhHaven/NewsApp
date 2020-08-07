import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompleteNewsComponent } from './complete-news.component';

const routes: Routes = [
  { path: '', component : CompleteNewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteNewsRoutingModule { }