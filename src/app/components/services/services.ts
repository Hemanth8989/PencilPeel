import { Component, Input } from '@angular/core';
import { Servicecard } from './servicecard/servicecard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [Servicecard,CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  @Input() services:any[] | undefined;
  @Input() isSub:boolean;
  @Input() subServices:any[];
  @Input() title:string;
}