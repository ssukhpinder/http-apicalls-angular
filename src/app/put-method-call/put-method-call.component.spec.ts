import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutMethodCallComponent } from './put-method-call.component';

describe('PutMethodCallComponent', () => {
  let component: PutMethodCallComponent;
  let fixture: ComponentFixture<PutMethodCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutMethodCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutMethodCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
