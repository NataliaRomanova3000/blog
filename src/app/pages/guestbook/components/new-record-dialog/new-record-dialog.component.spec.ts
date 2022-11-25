import { TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { GuestbookState } from "src/app/guestbook/store/reducer/guestbook.reducer";
import { NewRecordDialogComponent } from "./new-record-dialog.component";

describe('NewRecordDialogComponent', () => {
  const initialState = {  };
  let dialog: MatDialogRef<NewRecordDialogComponent, any>;
  let store: MockStore<GuestbookState>;
  const dialogMock = {
    close: () => {}
   };
  let component: NewRecordDialogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRecordDialogComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ],
    });

    dialog = TestBed.inject(MatDialogRef);
    store = TestBed.inject(MockStore);
    component = new NewRecordDialogComponent(dialog, store);
  })

  it('shoudl create component', () => {
    expect(component).toBeTruthy();
  })

  it('shoudl form group not valid if message too short', () => {
    component.messageForm.controls.author.setValue('lala');
    component.messageForm.controls.message.setValue('lala');
    expect(component.messageForm.valid).toBeFalse();
  })

  it('shoudl form group not valid if author is empty', () => {
    component.messageForm.controls.author.setValue('');
    component.messageForm.controls.message.setValue('sfdg sdfg ydsf gfysd gyds gfys syg duys  asfu dgyu');
    expect(component.messageForm.valid).toBeFalse();
  })

  it('shoudl form group not valid if message is empty', () => {
    component.messageForm.controls.author.setValue('lala');
    component.messageForm.controls.message.setValue('');
    expect(component.messageForm.valid).toBeFalse();
  })

  it('shoudl form group valid', () => {
    component.messageForm.controls.author.setValue('lala');
    component.messageForm.controls.message.setValue('sfdg sdfg ydsf gfysd gyds gfys syg duys  asfu dgyu');
    expect(component.messageForm.valid).toBeTrue();
  })
})
