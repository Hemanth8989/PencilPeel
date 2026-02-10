import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
export interface HeroConfig {
  badgeText: string;
  badgeIcon: string;
  title: {
    prefix: string;
    highlighted: string[];
    suffix: string;
  };
  description: string;
  backgroundImage: string;
  typingTexts: string[];
  primaryButton: {
    label: string;
    icon: string;
    action?: () => void;
  };
  secondaryButton?: {
    label: string;
    icon: string;
    action?: () => void;
  };
  floatingCard: {
    text: string;
    subtext?: string;
  };
}
@Component({
  selector: 'app-outdoor-hero-section',
  imports: [CommonModule,ButtonModule,],
  templateUrl: './outdoor-hero-section.html',
  styleUrl: './outdoor-hero-section.scss'
})
export class OutdoorHeroSection {
  @Input() config!: HeroConfig;
  @ViewChild('typingTextElement', { static: false }) typingTextElement!: ElementRef;

  private typingInterval: any;
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;

  constructor() { }

  ngOnInit(): void {
    if (!this.config) {
      console.error('Hero config is required');
    }
  }

  ngAfterViewInit(): void {
    if (this.config?.typingTexts?.length > 0) {
      this.startTypingEffect();
    }
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  private startTypingEffect(): void {
    if (!this.typingTextElement?.nativeElement) return;

    const element = this.typingTextElement.nativeElement;
    const texts = this.config.typingTexts;

    this.typingInterval = setInterval(() => {
      const currentText = texts[this.currentTextIndex];
      
      if (!this.isDeleting) {
        // Typing
        element.textContent = currentText.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
        
        if (this.currentCharIndex === currentText.length) {
          // Pause at end of text
          setTimeout(() => {
            this.isDeleting = true;
          }, this.pauseTime);
        }
      } else {
        // Deleting
        element.textContent = currentText.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
        
        if (this.currentCharIndex === 0) {
          this.isDeleting = false;
          this.currentTextIndex = (this.currentTextIndex + 1) % texts.length;
        }
      }
    }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }

  onPrimaryButtonClick(): void {
    // if (this.config.primaryButton.action) {
    //   this.config.primaryButton.action();
    // }
  }

  onSecondaryButtonClick(): void {
    // if (this.config.secondaryButton?.action) {
    //   this.config.secondaryButton.action();
    // }
  }
  getGradientClass(index: number): string {
    const gradients = [
      'from-orange-500 to-purple-600',
      'from-purple-500 to-orange-500',
      'from-blue-500 to-green-500',
      'from-red-500 to-yellow-500'
    ];
    return gradients[index % gradients.length];
  }
} 
