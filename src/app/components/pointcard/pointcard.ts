import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pointcard',
  imports: [CommonModule],
  templateUrl: './pointcard.html',
  styleUrl: './pointcard.scss'
})
export class Pointcard {
  @Input() pointcards:any[] = [];
  @Input() headerContent:any;
}
