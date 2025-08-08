import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ElectionListReturnedInterface } from "../types/election-list-returned.interface";
import { environment } from "../../environment/environment";
import { CandidatesListReturnedInterface } from "../types/candidates-list-returned.interfaces";

@Injectable({
  providedIn: 'root'
})
export class ElectionService{
    constructor(private readonly http: HttpClient){}

    getElectionOpenToVote(): Observable<ElectionListReturnedInterface> {
      const headers = { 'Content-Type': 'application/json' };
      return this.http.get<ElectionListReturnedInterface>(`${environment.apiBase}/api/elections/get-elections-to-vote`, { headers })
    }

    getCandidatesByElectionId(electionId: number): Observable<CandidatesListReturnedInterface>{
      const headers = { 'Content-Type': 'application/json' };
      return this.http.get<CandidatesListReturnedInterface>(`${environment.apiBase}/api/candidates/get-candidates-by-electionId/${electionId}`, { headers});
    }
}