import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;

  let mockBreakpointObserver;
  let mockPostService;
  let mockRouter;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [

      ],
    });

    mockBreakpointObserver = jasmine.createSpyObj(['observe']);
    mockPostService = jasmine.createSpyObj(['loadAll']);
    mockRouter = jasmine.createSpyObj([]);

    component = new SidenavComponent(mockBreakpointObserver, mockPostService, mockRouter);
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
