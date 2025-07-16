import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesRootComponent } from './candidates-root.component';

describe('CandidatesRootComponent', () => {
  let component: CandidatesRootComponent;
  let fixture: ComponentFixture<CandidatesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
