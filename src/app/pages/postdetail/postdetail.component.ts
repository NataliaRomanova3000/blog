import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/models/comment';
import {select, Store} from '@ngrx/store';
import {selectComments} from '../../comment/store/selector/comment.selector';
import {CommentState} from '../../comment/store/reducer/comment.reducer';
import { addComment } from 'src/app/comment/store/action/comment.actions';
import { FormControl, Validators } from '@angular/forms';


@Component({
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  id: number = 0;
  post: Post = new Post();
  comments$: Observable<Comment[]>;
  message = new FormControl('', [Validators.required, Validators.minLength(5)]);

  constructor(private postService: PostService,
                      protected route: ActivatedRoute,
                      private store: Store<CommentState>) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = 1;
      this.id = id == null ? 0 : +id;
      this.postService.postById(id).subscribe(p => this.post = p);
      this.comments$ = this.store.pipe(select(selectComments(this.id)));
    })
  }

  getErrorMessage() {
    return this.message.hasError('required') ? 'You must enter a comment' :
          (this.message.errors?.minlength ? 'You mast provide 5 symbols at list' : '') ;
  }

  addNewComment() {
    if(this.message.valid) {
      const comment = new Comment();
      comment.message = this.message.value;
      comment.postId = this.id;
      this.store.dispatch(addComment(comment));
      this.message.reset();
    }
  }
}
