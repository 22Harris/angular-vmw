import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService{
    private readonly studentToken='student_TOKEN';
    private readonly studentEmail= 'student_EMAIL';
    private readonly studentIM= 'student_IM';
    private readonly studentId= 'student_ID';
    
    setTokenOnLocalStorage(token : string){
      localStorage.setItem(this.studentToken, token);
    }
    
    getTokenOnLocalStorage(): string | null{
       return localStorage.getItem(this.studentToken);
    }

    setIMOnLocalStorage(IM: string){
      localStorage.setItem(this.studentIM, IM);
    }

    getIMOnLocalStorage(): string | null{
      return localStorage.getItem(this.studentIM);
    }
    
    setEmailOnLocalStorage(email: string){
      localStorage.setItem(this.studentEmail, email);
    }

    getEmailOnLocalStorage(): string | null{
      return localStorage.getItem(this.studentEmail);
    }

    setIdOnLocalStorage(id: number){
      localStorage.setItem(this.studentId, id.toString());    
    }

    getIdOnLocalStorage(): number {
      const item = localStorage.getItem(this.studentId);
      return Number(item);
    }

    
    deleteEmailAndIMOnLocalStorage(){
      localStorage.removeItem(this.studentEmail);
      localStorage.removeItem(this.studentIM);
    }

    initializeLocalStorage(){
      localStorage.removeItem(this.studentEmail);
      localStorage.removeItem(this.studentIM);
      localStorage.removeItem(this.studentId);
      localStorage.removeItem(this.studentToken)
    }
}