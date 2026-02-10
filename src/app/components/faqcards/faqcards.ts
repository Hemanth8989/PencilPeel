import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FaqCardModel } from '../../models/FaqCard';

@Component({
  selector: 'app-faqcards',
  imports: [CardModule,CommonModule,DialogModule,ButtonModule],
  templateUrl: './faqcards.html',
  styleUrl: './faqcards.scss'
})
export class Faqcards {
  @Input() faqcards:FaqCardModel[];
  displayDialog = false;
  selectedFaq: any = null;

  openDialog(item: any) {
    this.selectedFaq = item;
    this.displayDialog = true;
  }
}
