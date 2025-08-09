import { ElectionInterface } from './../../types/election-list-returned.interface';
import { Component, OnInit } from '@angular/core';
import { ListOfElectionComponentComponent } from '../../components/list-of-election-component/list-of-election-component.component';
import { ElectionService } from '../../services/election.service';

@Component({
  selector: 'app-candidate-election-list-root',
  imports: [ListOfElectionComponentComponent],
  templateUrl: './candidate-election-list-root.component.html',
  styleUrl: './candidate-election-list-root.component.css'
})
export class CandidateElectionListRootComponent implements OnInit{
  constructor(private readonly electionService : ElectionService){}
  electionsList: ElectionInterface[] = [];
  ngOnInit(): void {
    this.electionService.getElectionOpenToVote().subscribe({
      next: (response) => {
        this.electionsList = response.data;
      },
      error: (err) => {
        console.error('Erreur :', err);
      }
    });
  }
}