import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Start', loadChildren: () => import('./components/start/start.module').then(m => m.StartModule) },

  { path: 'News', loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule) },

  { path: 'Message', loadChildren: () => import('./components/message/message.module').then(m => m.MessageModule) },

  { path: 'Settings', loadChildren: () => import('./components/settings-app/settings-app.module').then(m => m.SettingsAppModule) },
  
  { path: 'CompleteNews', loadChildren: () => import('./components/complete-news/complete-news.module').then(m => m.CompleteNewsModule) },

  { path: '', pathMatch: 'full', redirectTo: 'Start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
