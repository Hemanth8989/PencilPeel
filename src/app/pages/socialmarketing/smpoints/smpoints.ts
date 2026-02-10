import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smpoints',
  imports: [CommonModule],
  templateUrl: './smpoints.html',
  styleUrl: './smpoints.scss'
})
export class Smpoints {
  @Input() strategies: any[] = [];
  @Input() sheader: any;
}
