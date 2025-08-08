import { RouterModule } from '@angular/router';
import { ElectionInterface } from './../../types/election-list-returned.interface';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-list-of-election-component',
  imports: [RouterModule],
  templateUrl: './list-of-election-component.component.html',
  styleUrl: './list-of-election-component.component.css'
})
export class ListOfElectionComponentComponent{
  
  elections = input<ElectionInterface[]>([]);

}
