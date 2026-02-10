import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-outdoorproductcards',
  imports: [CommonModule,CardModule],
  templateUrl: './outdoorproductcards.html',
  styleUrl: './outdoorproductcards.scss'
})
export class Outdoorproductcards {
  @Input() productContent:any;
  @Input() services:any[];
}
