import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUsModel } from '../../models/whyUs';

@Component({
  selector: 'app-whyus',
  imports: [CommonModule],
  templateUrl: './whyus.html',
  styleUrl: './whyus.scss'
})
export class Whyus {
    @Input() whyus:WhyUsModel;

    get gridColsClass() {
  if (!this.whyus?.List) return 'grid-cols-1';
  const count = Math.min(this.whyus.List.length, 4);
  return `lg:grid-cols-${count}`;
}
}
