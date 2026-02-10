import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whycpencilpeel',
  imports: [CommonModule],
  templateUrl: './whycpencilpeel.html',
  styleUrl: './whycpencilpeel.scss'
})
export class Whycpencilpeel {
  @Input() headerContent:any;
  @Input() features:any[];

  getGridColsClass(): string {
    const count = this.features.length;
    if (count >= 4) return 'grid-cols-4';
    if (count === 3) return 'grid-cols-3';
    if (count === 2) return 'grid-cols-2';
    return 'grid-cols-1';
  }
}
