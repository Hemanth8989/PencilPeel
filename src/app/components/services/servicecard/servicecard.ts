import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-servicecard',
  imports: [ButtonModule,CardModule,RouterLink],
  templateUrl: './servicecard.html',
  styleUrl: './servicecard.scss'
})
export class Servicecard {
  @Input() service:any;
  @Input() index:any;
  @Input() isSub:boolean;
}
