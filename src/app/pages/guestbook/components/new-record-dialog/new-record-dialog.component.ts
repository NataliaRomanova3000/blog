import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Guestbook } from 'src/app/models/guestbook';
import { Store } from '@ngrx/store';
import { GuestbookState } from 'src/app/guestbook/store/reducer/guestbook.reducer';
import { addGuestbook } from 'src/app/guestbook/store/action/guestbook.action';

@Component({
  selector: 'app-new-record-dialog',
  templateUrl: './new-record-dialog.component.html',
  styleUrls: ['./new-record-dialog.component.css']
})
export class NewRecordDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<NewRecordDialogComponent>,
    private store: Store<GuestbookState>,
    private formBuilder: FormBuilder
  ) { }

  messageForm: FormGroup= this.formBuilder.group({
    author: [null, Validators.required],
    message: [null, [Validators.required, Validators.minLength(20)]]
  });

  getErrorMessage() {
    return this.messageForm.controls.author.errors.required ? 'You must enter a name or email' : '';
  }

  getErrorMessageMessage() {
    return this.messageForm.controls.message.errors.required ? 'You must enter a message' :
           'You mast provide 20 symbols at list' ;
  }

  submit() {
    if(this.messageForm.valid ) {
      const guestbook = new Guestbook();
      guestbook.author = this.messageForm.controls.author.value;
      guestbook.message = this.messageForm.controls.message.value;

      this.store.dispatch(addGuestbook(guestbook));
      this.dialogRef.close(guestbook);
    }
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
