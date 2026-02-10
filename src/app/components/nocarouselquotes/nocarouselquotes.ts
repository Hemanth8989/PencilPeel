import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-nocarouselquotes',
  imports: [ButtonModule,CommonModule,CarouselModule],
  templateUrl: './nocarouselquotes.html',
  styleUrl: './nocarouselquotes.scss'
})
export class Nocarouselquotes {
  @Input() herocontent: any;
  @Input() quotes:any[] = [];
}
