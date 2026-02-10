import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagecards',
  imports: [CommonModule],
  templateUrl: './imagecards.html',
  styleUrl: './imagecards.scss'
})
export class Imagecards {
  @Input() imageCards:any[];
}
