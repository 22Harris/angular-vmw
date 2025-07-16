import { Route } from "@angular/router";
import { InitialLoginStudentComponent } from "./components/initial-login-student-component/initial-login-student-component";
import { FinalLoginStudentComponent } from "./components/final-login-student-component/final-login-student-component";

export const AuthenticationStudentRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'initial-login-student'
  },
  {
    path: 'initial-login-student',
    component: InitialLoginStudentComponent
  },
  {
    path: 'final-login-student',
    component: FinalLoginStudentComponent
  }
];