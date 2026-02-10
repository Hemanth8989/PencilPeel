import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefitsnew',
  imports: [CommonModule],
  templateUrl: './benefitsnew.html',
  styleUrl: './benefitsnew.scss'
})
export class Benefitsnew {
  @Input() benefits: any[] = [];
  @Input() title: string = '';
  @Input() description:string = '';

}
