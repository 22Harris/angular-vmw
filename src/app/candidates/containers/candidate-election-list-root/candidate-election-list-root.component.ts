import { Component } from '@angular/core';
import { ListOfElectionComponentComponent } from '../../components/list-of-election-component/list-of-election-component.component';

@Component({
  selector: 'app-candidate-election-list-root',
  imports: [ListOfElectionComponentComponent],
  templateUrl: './candidate-election-list-root.component.html',
  styleUrl: './candidate-election-list-root.component.css'
})
export class CandidateElectionListRootComponent {

}
