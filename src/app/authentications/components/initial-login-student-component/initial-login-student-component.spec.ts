import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialLoginStudentComponent } from './initial-login-student-component';

describe('InitialLoginStudentComponent', () => {
  let component: InitialLoginStudentComponent;
  let fixture: ComponentFixture<InitialLoginStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialLoginStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialLoginStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
