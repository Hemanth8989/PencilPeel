import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whychooseus',
  imports: [],
  templateUrl: './whychooseus.html',
  styleUrl: './whychooseus.scss'
})
export class Whychooseus {
  @Input() wcutitle:string;
}
