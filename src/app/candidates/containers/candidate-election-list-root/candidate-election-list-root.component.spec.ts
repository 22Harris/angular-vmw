import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateElectionListRootComponent } from './candidate-election-list-root.component';

describe('CandidateElectionListRootComponent', () => {
  let component: CandidateElectionListRootComponent;
  let fixture: ComponentFixture<CandidateElectionListRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateElectionListRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateElectionListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
