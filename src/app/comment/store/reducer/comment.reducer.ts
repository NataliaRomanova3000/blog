import {Action, createReducer, on} from '@ngrx/store';
import * as CommentActions from '../action/comment.actions';
import {Comment} from '../../../models/comment';

export const commentFeatureKey = 'comment';

export interface CommentState {
  comments: Comment[];
}

export const initialState: CommentState = {
  comments: []
};

export const commentReducer = createReducer(
  initialState,
  on(CommentActions.addComment,
    (state: CommentState, {comment}) =>
      ({...state,
        comments: [...state.comments, comment]
      }))
);

export function reducer(state: CommentState | undefined, action: Action): any {
  return commentReducer(state, action);
}

