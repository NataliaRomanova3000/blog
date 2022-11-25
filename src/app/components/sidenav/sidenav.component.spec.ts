import { TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let mockPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent]
    });
    mockPostService = jasmine.createSpyObj(['loadAll']);

    component = new SidenavComponent(mockPostService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
