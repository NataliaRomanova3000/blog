
import { createAction, props } from '@ngrx/store';
import { Guestbook } from '../../../models/guestbook';

export const addGuestbook = createAction(
  '[Guestbook] Add Guestbook',
  (guestbook: Guestbook) => ({guestbook})
);
