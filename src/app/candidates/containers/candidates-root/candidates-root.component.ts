import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../libs/navbar-component/navbar-component';

@Component({
  selector: 'app-candidates-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './candidates-root.component.html',
  styleUrl: './candidates-root.component.css'
})
export class CandidatesRootComponent {

}
