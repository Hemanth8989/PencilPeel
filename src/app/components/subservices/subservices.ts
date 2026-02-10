import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-subservices',
  imports: [CommonModule,DialogModule,CardModule,ButtonModule],
  templateUrl: './subservices.html',
  styleUrl: './subservices.scss'
})
export class Subservices {
  @Input() subServices:any[]=[];
  @Input() title:string;
  @Input() description:string;
  selService: any = null;
  displayDialog: boolean = false;

  openDialog(service: any): void {
    this.selService = service;
    this.displayDialog = true;
  }
}
