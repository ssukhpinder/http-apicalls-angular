import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMethodCallComponent } from './delete-method-call.component';

describe('DeleteMethodCallComponent', () => {
  let component: DeleteMethodCallComponent;
  let fixture: ComponentFixture<DeleteMethodCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMethodCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMethodCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
