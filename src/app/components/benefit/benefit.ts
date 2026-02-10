import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit',
  imports: [CommonModule],
  templateUrl: './benefit.html',
  styleUrl: './benefit.scss'
})
export class Benefit {
  @Input() title:string;
  @Input() description:string;
  @Input() benefits:any[];
}
