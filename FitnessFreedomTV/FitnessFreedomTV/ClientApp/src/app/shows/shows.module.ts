import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveShowsComponent } from './active-shows/active-shows.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActiveShowsComponent
  ],
  exports: [
    ActiveShowsComponent
  ]
})
export class ShowsModule { }
