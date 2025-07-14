import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCandidatesComponent } from './list-of-candidates-component';

describe('ListOfCandidatesComponent', () => {
  let component: ListOfCandidatesComponent;
  let fixture: ComponentFixture<ListOfCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfCandidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
