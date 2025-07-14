import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InitialLoginStudentInterface } from "../types/initial-login-student.interfaces";
import { environment } from "../../environment/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
    constructor(private http: HttpClient){}

    initialLoginStudentService(iniLog: InitialLoginStudentInterface):Observable<any>{
        const headers= {'Content-Type':'application/json'};

        return this.http.post<any>(`${environment.apiBase}/api/students/initial-login-student`, iniLog, { headers });
    }

    finalLoginStudentService(code: string, id: number): Observable<any>{
      const headers = {'Content-Type': 'application/json'};

      return this.http.post<any>(`${environment.apiBase}/api/students/final-login-student/${id}`, code, {headers});
    }
}