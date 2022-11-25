import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Guestbook } from '../../models/guestbook';
import { select, Store } from '@ngrx/store';
import { selectGuestbooks } from '../../guestbook/store/selector/guestbook.selectors';
import { GuestbookState } from '../../guestbook/store/reducer/guestbook.reducer';
import { MatDialog } from '@angular/material/dialog';
import { NewRecordDialogComponent } from './components/new-record-dialog/new-record-dialog.component';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent {

  guestbooks$: Observable<Guestbook[]> = this.store.pipe(select(selectGuestbooks));

  constructor(private store: Store<GuestbookState>,
              private dialog: MatDialog) {

  }

  addNew(): void {
    let dialogRef = this.dialog.open(NewRecordDialogComponent, {
      width: '450px'
    });
  }
}


