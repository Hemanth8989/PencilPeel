import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mul-benfits',
  imports: [CommonModule],
  templateUrl: './mul-benfits.html',
  styleUrl: './mul-benfits.scss'
})
export class MulBenfits {
  @Input() benfits:any[];
  @Input() sectionobj:{title:string,description:string,footer:string};
}
