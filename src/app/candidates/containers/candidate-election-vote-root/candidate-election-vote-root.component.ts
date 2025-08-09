import { LocalStorageService } from './../../../authentications/services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { ListOfCandidatesComponent } from '../../components/list-of-candidates-component/list-of-candidates-component';
import { ElectionService } from '../../services/election.service';
import { ActivatedRoute } from '@angular/router';
import { CandidateInterface } from '../../types/candidates-list-returned.interfaces';
import { VoteToSendInterface } from '../../types/vote-to-send.interface';

@Component({
  selector: 'app-candidate-election-vote-root',
  imports: [ListOfCandidatesComponent],
  templateUrl: './candidate-election-vote-root.component.html',
  styleUrl: './candidate-election-vote-root.component.css'
})
export class CandidateElectionVoteRootComponent implements OnInit{
  candidatesList: CandidateInterface[] = [];
  constructor(private readonly electionService : ElectionService, private readonly route: ActivatedRoute, private readonly localStorageService: LocalStorageService){}

  getElectionID(): number {
    const electionIdStr = this.route.snapshot.paramMap.get('electionId');

    if (electionIdStr === null) {
      throw new Error('Le paramètre electionId est manquant dans l\'URL');
    }

    const electionId = Number.parseInt(electionIdStr, 10);

    if (Number.isNaN(electionId)) {
      throw new Error('ID d\'élection invalide');
    }

    return electionId;
  }

  getStudentId():number{
    const studentId = this.localStorageService.getIMOnLocalStorage();
    if (studentId === null) {
      throw new Error('studentId est null');
    }

    const studentIdInt = Number.parseInt(studentId, 10);
    return studentIdInt;
  }

  ngOnInit(): void {
    this.electionService.getCandidatesByElectionId(this.getElectionID()).subscribe({
      next: (response) => {
        this.candidatesList = response.data;
      },
      error: (err) => {
        console.error('Erreur :', err);
      }
    });
  }

  selectedCandidatesById(iDs : number[]):void{
    const data: VoteToSendInterface = {
      studentId: this.getStudentId(),
      iDs : iDs,
      electionId: this.getStudentId()
    }
    this.electionService.sendVoteOfStudentByStudentId(data).subscribe({
      next: (response) => {
        console.log('Success', response);
      },
      error: (err) => {
        console.error('Erreur :', err);
      }
    })
  }

}
