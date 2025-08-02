import { ElectionInterface } from './../../types/election-list-returned.interface';
import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-list-of-election-component',
  imports: [],
  templateUrl: './list-of-election-component.component.html',
  styleUrl: './list-of-election-component.component.css'
})
export class ListOfElectionComponentComponent{
  
  elections = input<ElectionInterface[]>([]);

}
