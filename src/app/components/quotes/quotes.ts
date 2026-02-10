import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule, CarouselModule],
  templateUrl: './quotes.html',
  styleUrl: './quotes.scss'
})
export class Quotes {

  @Input() testimonials;
}
