import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromGuestbook from '../reducer/guestbook.reducer';

export const selectGuestbookState = createFeatureSelector<fromGuestbook.GuestbookState>(
  fromGuestbook.guestbookFeatureKey,
);

export const selectGuestbooks = createSelector(
  selectGuestbookState,
  (state: fromGuestbook.GuestbookState) => state.guestbooks
);
