import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PostdetailComponent } from './pages/postdetail/postdetail.component';
import { RouterModule } from '@angular/router';
import { GuestbookComponent } from './pages/guestbook/guestbook.component';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { guestbookFeatureKey, reducer } from './guestbook/store/reducer/guestbook.reducer';
import { GuestbookModule } from './guestbook/guestbook.module';
import { NewRecordDialogComponent } from './pages/guestbook/components/new-record-dialog/new-record-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PostdetailComponent,
    GuestbookComponent,
    NewRecordDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GuestbookModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
