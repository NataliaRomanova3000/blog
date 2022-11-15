import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromComment from '../reducer/comment.reducer';

export const selectCommentState = createFeatureSelector<fromComment.CommentState>(
  fromComment.commentFeatureKey,
);

export const selectComments = (postId: number) =>
  createSelector(
    selectCommentState,
    (state: fromComment.CommentState) => state.comments.filter(c => c.postId == postId)
);
