import { Component, input, output } from '@angular/core';
import { CandidateInterface } from '../../types/candidates-list-returned.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-candidates-component',
  imports: [],
  templateUrl: './list-of-candidates-component.html',
  styleUrl: './list-of-candidates-component.css'
})
export class ListOfCandidatesComponent{

  constructor(private readonly router: Router){}
  
  candidates = input<CandidateInterface[]>([]);
  votesSubmitted = output<number[]>();

  selectedCandidates: number[] = [];

  onCheckboxChange(ID: number, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      if (!this.selectedCandidates.includes(ID)) {
        this.selectedCandidates.push(ID);
      }
    } else {
      this.selectedCandidates = this.selectedCandidates.filter((c) => {
        return c !== ID;
      });
    }
  }

  submitVotes() {
    this.votesSubmitted.emit(this.selectedCandidates);
    this.router.navigate(['election/election-posts']);
  }

}
