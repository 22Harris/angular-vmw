import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateElectionVoteRootComponent } from './candidate-election-vote-root.component';

describe('CandidateElectionVoteRootComponent', () => {
  let component: CandidateElectionVoteRootComponent;
  let fixture: ComponentFixture<CandidateElectionVoteRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateElectionVoteRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateElectionVoteRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
