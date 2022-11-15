import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { commentFeatureKey, reducer } from './store/reducer/comment.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(commentFeatureKey, reducer)
  ]
})
export class CommentModule { }
