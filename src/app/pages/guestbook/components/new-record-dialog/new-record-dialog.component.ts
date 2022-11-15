import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Guestbook } from 'src/app/models/guestbook';
import { select, Store } from '@ngrx/store';
import { selectGuestbooks } from 'src/app/guestbook/store/selector/guestbook.selectors';
import { GuestbookState } from 'src/app/guestbook/store/reducer/guestbook.reducer';
import { addGuestbook } from 'src/app/guestbook/store/action/guestbook.action';

@Component({
  selector: 'app-new-record-dialog',
  templateUrl: './new-record-dialog.component.html',
  styleUrls: ['./new-record-dialog.component.css']
})
export class NewRecordDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewRecordDialogComponent>,
    private store: Store<GuestbookState>
  ) { }

  author = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required, Validators.minLength(20)]);

  getErrorMessage() {
    return this.author.hasError('required') ? 'You must enter a name or email' : '';
  }

  getErrorMessageMessage() {
    return this.message.hasError('required') ? 'You must enter a message' :
          (this.message.errors?.minlength ? 'You mast provide 20 symbols at list' : '') ;
  }

  ngOnInit(): void {

  }

  save() {
    if(this.author.valid && this.message.valid) {
      const guestbook = new Guestbook();
      guestbook.author = this.author.value;
      guestbook.message = this.message.value;

      this.store.dispatch(addGuestbook(guestbook));
      this.dialogRef.close(guestbook);
    }
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
