import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfElectionComponentComponent } from './list-of-election-component.component';

describe('ListOfElectionComponentComponent', () => {
  let component: ListOfElectionComponentComponent;
  let fixture: ComponentFixture<ListOfElectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfElectionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfElectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
