import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-industrycontent',
  imports: [CommonModule,CardModule],
  templateUrl: './industrycontent.html',
  styleUrl: './industrycontent.scss'
})
export class Industrycontent {
  @Input() industries:any[];
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() footer:string;
}
