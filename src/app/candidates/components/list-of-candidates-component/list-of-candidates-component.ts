import { Component, input } from '@angular/core';
import { CandidateInterface } from '../../types/candidates-list-returned.interfaces';

@Component({
  selector: 'app-list-of-candidates-component',
  imports: [],
  templateUrl: './list-of-candidates-component.html',
  styleUrl: './list-of-candidates-component.css'
})
export class ListOfCandidatesComponent {
  candidates = input<CandidateInterface[]>([]);
}
