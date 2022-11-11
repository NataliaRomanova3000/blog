import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Guestbook} from '../../models/guestbook';
import {select, Store} from '@ngrx/store';
import {selectGuestbooks} from '../../guestbook/store/selector/guestbook.selectors';
import {GuestbookState} from '../../guestbook/store/reducer/guestbook.reducer';
import { addGuestbook } from 'src/app/guestbook/store/action/guestbook.action';
import { MatDialog } from '@angular/material/dialog';
import { NewRecordDialogComponent } from './components/new-record-dialog/new-record-dialog.component';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

  guestbooks$: Observable<Guestbook[]> = this.store.pipe(select(selectGuestbooks));

  constructor(private store: Store<GuestbookState>,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  addGuestbook(guestbookName: string): void {
      const guestbook = new Guestbook();
      guestbook.author = guestbookName;
      this.store.dispatch(addGuestbook(guestbook));
  }

  addNew(): void {
    let dialogRef = this.dialog.open(NewRecordDialogComponent, {
      width: '450px'
    });
  }
}


