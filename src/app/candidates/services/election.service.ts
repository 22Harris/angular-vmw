import { VoteToSendInterface } from './../types/vote-to-send.interface';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ElectionListReturnedInterface } from "../types/election-list-returned.interface";
import { environment } from "../../environment/environment";
import { CandidatesListReturnedInterface } from "../types/candidates-list-returned.interfaces";
import { LocalStorageService } from "../../authentications/services/localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class ElectionService{

  private readonly headers: { [key: string]: string };
    constructor(
        private readonly http: HttpClient,
        private readonly tokenService: LocalStorageService
    ) {
        const storage = this.tokenService.getTokenOnLocalStorage();
        if (!storage) {
            throw new Error('No token found in local storage');
        }

        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storage}`,
        };
    }


    getElectionOpenToVote(): Observable<ElectionListReturnedInterface> {
      return this.http.get<ElectionListReturnedInterface>(`${environment.apiBase}/api/elections/get-elections-to-vote`, { headers: this.headers })
    }

    getCandidatesByElectionId(electionId: number): Observable<CandidatesListReturnedInterface>{
      return this.http.get<CandidatesListReturnedInterface>(`${environment.apiBase}/api/candidates/get-candidates-by-electionId/${electionId}`, { headers: this.headers});
    }

    sendVoteOfStudentByStudentId(voteToSend: VoteToSendInterface): Observable<any>{
      return this.http.post<any>(`${environment.apiBase}/api/votes/create-vote`, voteToSend, { headers: this.headers });
    }
}