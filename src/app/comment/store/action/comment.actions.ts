import { createAction, props } from '@ngrx/store';
import { Comment } from '../../../models/comment';

export const addComment = createAction(
  '[Comment] Add Comment',
  (comment: Comment) => ({comment})
);
