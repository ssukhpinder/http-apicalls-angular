import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMethodCallComponent } from './get-method-call.component';

describe('GetMethodCallComponent', () => {
  let component: GetMethodCallComponent;
  let fixture: ComponentFixture<GetMethodCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMethodCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMethodCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
