import { Component } from '@angular/core';
import { NavbarComponent } from '../../../libs/navbar-component/navbar-component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { LocalStorageService } from '../../services/localstorage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-initial-login-student-component',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './initial-login-student-component.html',
  styleUrl: './initial-login-student-component.css'
})
export class InitialLoginStudentComponent {
    form: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private authenticationService: AuthenticationService,
      private localStorageService : LocalStorageService,
      private router: Router,
    ){
      this.form = this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        IM: ['', Validators.required],
      });
    }

  onSubmit(): void {

    if(this.form.invalid){
      console.log('------Forme invalide', this.form);
      return;
    }

    this.authenticationService.initialLoginStudentService(this.form.value).subscribe({
      next: (response) => {
        if(response.success){
          this.localStorageService.setIdOnLocalStorage(response.data.student.id);
          this.localStorageService.setEmailOnLocalStorage(response.data.student.email);
          this.localStorageService.setIMOnLocalStorage(response.data.student.IM);
          this.router.navigate(['vms/final-login-student']);
        } else {
          console.error('Erreur de connexion:', response.message);
        }
      },
      error: (err) => {
        console.error('Erreur API:', err);
      }
    });
  }
}
