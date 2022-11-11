import {Action, createReducer, on} from '@ngrx/store';
import * as GuestbookActions from '../action/guestbook.action';
import {Guestbook} from '../../../models/guestbook';

export const guestbookFeatureKey = 'guestbook';

export interface GuestbookState {
  guestbooks: Guestbook[];
}

export const initialState: GuestbookState = {
  guestbooks: []
};

export const guestbookReducer = createReducer(
  initialState,
  on(GuestbookActions.addGuestbook,
    (state: GuestbookState, {guestbook}) =>
      ({...state,
        guestbooks: [...state.guestbooks, guestbook]
      }))
);

export function reducer(state: GuestbookState | undefined, action: Action): any {
  return guestbookReducer(state, action);
}
