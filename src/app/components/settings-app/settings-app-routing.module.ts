import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsAppComponent } from './settings-app.component';

const routes: Routes = [
  
  {path : '', component : SettingsAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsAppRoutingModule { }
