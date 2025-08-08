import { Component, input, output } from '@angular/core';
import { CandidateInterface } from '../../types/candidates-list-returned.interfaces';

@Component({
  selector: 'app-list-of-candidates-component',
  imports: [],
  templateUrl: './list-of-candidates-component.html',
  styleUrl: './list-of-candidates-component.css'
})
export class ListOfCandidatesComponent{
  
  candidates = input<CandidateInterface[]>([]);
  votessubmitted = output<number[]>();

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
    this.votessubmitted.emit(this.selectedCandidates);
  }

}
