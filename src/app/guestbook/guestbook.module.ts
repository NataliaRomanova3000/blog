import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { guestbookFeatureKey, reducer } from './store/reducer/guestbook.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(guestbookFeatureKey, reducer)
  ]
})
export class GuestbookModule { }
