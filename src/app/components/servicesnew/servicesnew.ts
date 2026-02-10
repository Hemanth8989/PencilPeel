import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-servicesnew',
  imports: [CommonModule],
  templateUrl: './servicesnew.html',
  styleUrl: './servicesnew.scss'
})
export class Servicesnew {
  @Input() service:any;
  constructor(private router: Router) { 
    AOS.init();
  }
  navigateToService(route: string): void {
    this.router.navigate([route]);
  }
}
