import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-glass-cta',
  imports: [CommonModule,ButtonModule],
  templateUrl: './glass-cta.html',
  styleUrl: './glass-cta.scss'
})
export class GlassCta {

  @Input() cta:any;

  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
