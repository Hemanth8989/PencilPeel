import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nocarouselherosection',
  imports: [ButtonModule],
  templateUrl: './nocarouselherosection.html',
  styleUrl: './nocarouselherosection.scss'
})
export class Nocarouselherosection {
  @Input() herocontent:any;
}
