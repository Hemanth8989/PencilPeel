import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-industrycards',
  imports: [CardModule,CommonModule],
  templateUrl: './industrycards.html',
  styleUrl: './industrycards.scss'
})
export class Industrycards {
  @Input() items:any[];
  @Input() title:string;
  @Input() description:string;
}
