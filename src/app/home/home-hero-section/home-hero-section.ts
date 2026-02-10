import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule, ButtonModule],
  templateUrl: './home-hero-section.html',
  styleUrl: './home-hero-section.scss'
})
export class HomeHeroSection implements OnInit {
  companyName = '';
  mainHeading1 = '';
  mainHeading2 = '';
  subtitle = '';

  fullCompanyName = 'Pencil Peel IMT';
  fullMainHeading1 = 'Where Creativity Meets Technology,';
  fullMainHeading2 = 'Driving Business Success Through Integrated Marketing Solutions';

  currentQuoteIndex = 0;
  typedQuote = '';

  quotes = [
    "Transforming Visions into Digital Reality",
    "Innovate. Elevate. Succeed.",
    "Empowering Businesses through Digital Solutions",
    "Your Partner in Digital Success"
  ];

  ngOnInit() {
    AOS.init();
    this.startTypingSequence();
    this.rotateQuotes();
  }

  async startTypingSequence() {
    // Type company name first
    await this.typeText(this.fullCompanyName, 'company', 100);
    await this.delay(1);

    // Type main heading line 1
    await this.typeText(this.fullMainHeading1, 'heading1', 80);
    await this.delay(3);

    // Type main heading line 2
    await this.typeText(this.fullMainHeading2, 'heading2', 60);
  }

  typeText(text: string, target: string, speed: number): Promise<void> {
    return new Promise(resolve => {
      let index = 0;
      const typing = setInterval(() => {
        if (index < text.length) {
          switch (target) {
            case 'company':
              this.companyName += text.charAt(index);
              break;
            case 'heading1':
              this.mainHeading1 += text.charAt(index);
              break;
            case 'heading2':
              this.mainHeading2 += text.charAt(index);
              break;
          }
          index++;
        } else {
          clearInterval(typing);
          resolve();
        }
      }, speed);
    });
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  rotateQuotes() {
    setTimeout(() => {
      this.typeQuote(); // type first quote
      setInterval(() => {
        this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
        this.typeQuote(); // safely type next quote
      }, 4000);
    }, 3000);
  }


  typingInterval: any = null; // Add this property to your class

  typeQuote() {
    // Clear any previous typing interval
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    this.typedQuote = '';
    const currentQuote = this.quotes[this.currentQuoteIndex];
    let index = 0;

    this.typingInterval = setInterval(() => {
      if (index < currentQuote.length) {
        this.typedQuote += currentQuote.charAt(index);
        index++;
      } else {
        clearInterval(this.typingInterval);
        this.typingInterval = null;
      }
    }, 50);
  }

}
