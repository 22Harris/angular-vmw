import { Component } from '@angular/core';
import { NavbarComponent } from '../../../libs/navbar-component/navbar-component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/localstorage.service';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { InitialLoginStudentInterface } from '../../types/initial-login-student.interfaces';

@Component({
  selector: 'app-final-login-student-component',
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './final-login-student-component.html',
  styleUrl: './final-login-student-component.css'
})
export class FinalLoginStudentComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private authenticationService: AuthenticationService,
  ){
    this.form = this.formBuilder.group({
      code: ['', Validators.required],
    });
  }

  onSubmit(): void{
    if(this.form.invalid){
      console.log('------Forme invalide', this.form);
      return;
    }

    const id = this.localStorageService.getIdOnLocalStorage();

    this.authenticationService.finalLoginStudentService(this.form.value, id).subscribe({
      next: (response) => {
        if(response.success){
          this.localStorageService.setTokenOnLocalStorage(response.data.token);
          this.localStorageService.deleteEmailAndIMOnLocalStorage();
          console.log('-------token inséré');
        }else{
          console.error('Erreur de connexion:', response.message);

        }
      },
      error: (err) => {
        console.error('Erreur API: ', err);
      }
    })
  }  
  resendCode(): void{
    const IM = this.localStorageService.getIMOnLocalStorage();
    const email = this.localStorageService.getEmailOnLocalStorage();

    const iniLog: InitialLoginStudentInterface = {
      email: email,
      IM: IM,
    };

    this.authenticationService.initialLoginStudentService(iniLog).subscribe({
      next: (response) => {
        if(!response.success){
          console.error('Erreur de connexion:', response.message);
        }
      },
      error: (err) => {
        console.error('Erreur API:', err);
      }
    });
  }
}
