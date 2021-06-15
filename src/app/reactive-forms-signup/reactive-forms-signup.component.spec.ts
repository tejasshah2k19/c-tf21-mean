import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsSignupComponent } from './reactive-forms-signup.component';

describe('ReactiveFormsSignupComponent', () => {
  let component: ReactiveFormsSignupComponent;
  let fixture: ComponentFixture<ReactiveFormsSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
