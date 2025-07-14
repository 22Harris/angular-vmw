import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalLoginStudentComponent } from './final-login-student-component';

describe('FinalLoginStudentComponent', () => {
  let component: FinalLoginStudentComponent;
  let fixture: ComponentFixture<FinalLoginStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalLoginStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalLoginStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
