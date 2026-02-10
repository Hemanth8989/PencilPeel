import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productcard',
  imports: [CommonModule],
  templateUrl: './productcard.html',
  styleUrl: './productcard.scss'
})
export class Productcard {
  @Input() productcards: any[];
  @Input() title: string ;
  @Input() description: string;
}
