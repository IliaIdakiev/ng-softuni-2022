import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './list/list.component';
import { Test } from '../test';


@NgModule({
  declarations: [
    PostListComponent
  ],
  providers: [
    Test // { provide: Test, useClass: Test }
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
