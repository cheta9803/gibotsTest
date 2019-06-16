import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeadlinesComponent } from './top-headlines.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { SearchPipe } from '../pipes/search.pipe';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TopHeadlinesComponent }
]
@NgModule({
  declarations: [
    TopHeadlinesComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule
  ]
})
export class TopHeadlinesModule { }
