import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ElectionListReturnedInterface } from "../types/election-list-returned.interface";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ElectionService{
    constructor(private http: HttpClient){}

    getElectionOpenToVote(): Observable<ElectionListReturnedInterface> {
      const headers = { 'Content-Type': 'application/json' };
      return this.http.get<ElectionListReturnedInterface>(`${environment.apiBase}/api/elections/get-elections-to-vote`, { headers })
    }
}