import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smstrategy',
  imports: [CommonModule],
  templateUrl: './smstrategy.html',
  styleUrl: './smstrategy.scss'
})
export class Smstrategy {
  @Input() sheader:any;
  @Input() strategies:any[];
}
