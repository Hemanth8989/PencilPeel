import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-section',
  imports: [],
  templateUrl: './mission-section.html',
  styleUrl: './mission-section.scss'
})
export class MissionSection {
  typedText = '';
  fullText = "Let's Innovate Together";
  typingSpeed = 100;
  
  ngOnInit() {
    this.typeText();
  }
  
  typeText() {
    let index = 0;
    const typing = setInterval(() => {
      if (index < this.fullText.length) {
        this.typedText += this.fullText.charAt(index);
        index++;
      } else {
        clearInterval(typing);
      }
    }, this.typingSpeed);
  }
}
