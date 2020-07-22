import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMethodCallComponent } from './post-method-call.component';

describe('PostMethodCallComponent', () => {
  let component: PostMethodCallComponent;
  let fixture: ComponentFixture<PostMethodCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMethodCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMethodCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
