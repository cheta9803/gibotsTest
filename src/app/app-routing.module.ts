import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'top-headlines',
    loadChildren: './top-headlines/top-headlines.module#TopHeadlinesModule'
  },
  { path: '', redirectTo: '/top-headlines', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
