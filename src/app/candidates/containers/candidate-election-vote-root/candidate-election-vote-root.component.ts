import { Component, OnInit } from '@angular/core';
import { ListOfCandidatesComponent } from '../../components/list-of-candidates-component/list-of-candidates-component';
import { ElectionService } from '../../services/election.service';
import { ActivatedRoute } from '@angular/router';
import { CandidateInterface } from '../../types/candidates-list-returned.interfaces';
import { response } from 'express';

@Component({
  selector: 'app-candidate-election-vote-root',
  imports: [ListOfCandidatesComponent],
  templateUrl: './candidate-election-vote-root.component.html',
  styleUrl: './candidate-election-vote-root.component.css'
})
export class CandidateElectionVoteRootComponent implements OnInit{
  candidatesList: CandidateInterface[] = [];
  constructor(private readonly electionService : ElectionService, private readonly route: ActivatedRoute){}
  ngOnInit(): void {
    const electionIdStr = this.route.snapshot.paramMap.get('electionId');

    if (electionIdStr === null) {
      console.error('Le paramètre electionId est manquant dans l\'URL');
      return;
    }
    
    const electionId = Number.parseInt(electionIdStr, 10);
    
    if (Number.isNaN(electionId)) {
      console.error('ID d\'élection invalide, redirection...');
      return;
    }

    this.electionService.getCandidatesByElectionId(electionId).subscribe({
      next: (response) => {
        this.candidatesList = response.data;
      },
      error: (err) => {
        console.error('Erreur :', err);
      }
    });
  }

}
