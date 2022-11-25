import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CommentState } from 'src/app/comment/store/reducer/comment.reducer';

import { PostdetailComponent } from './postdetail.component';

describe('PostdetailComponent', () => {
  const initialState = {  };
  let component: PostdetailComponent;
  let mockPostService;
  let route;
  let store: MockStore<CommentState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostdetailComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        provideMockStore({ initialState })
      ],
    });

    mockPostService = jasmine.createSpyObj(['postById']);
    route = TestBed.inject(ActivatedRoute)
    store = TestBed.inject(MockStore);
    component = new PostdetailComponent(mockPostService, route, store);
  });

  it('shoudl create component', () => {
    expect(component).toBeTruthy();
  })

  it('comment formControl should be ivnalid if it is empty', () => {
    expect(component.message.valid).toBeFalse();
  })

  it('comment formControl should be invalid if it is less than 5 characters', () => {
    component.message.setValue('1234');
    expect(component.message.valid).toBeFalse();
  })

  it('comment formControl valid', () => {
    component.message.setValue('12345');
    expect(component.message.valid).toBeTrue();
  })
});
