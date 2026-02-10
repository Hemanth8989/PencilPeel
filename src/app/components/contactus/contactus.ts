import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contactus',
  imports: [ButtonModule,CommonModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.scss'
})
export class Contactus {
  @Input() title: string = 'Ready to Transform Your Business?';
  @Input() description: string = '';
  @Input() primaryButtonText: string = 'Start Your Project';
  @Input() secondaryButtonText?: string = 'Learn More';
  @Input() showSecondaryButton: boolean = true;

  isVisible = false;
  buttonHovered = false;
  cardHovered = false;
  
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.observeElements();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => this.isVisible = true, 200);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  private observeElements(): void {
    const element = document.querySelector('[data-animate="contact-block"]');
    if (element) {
      this.observer.observe(element);
    }
  }

  onCardHover(hovered: boolean) {
    this.cardHovered = hovered;
  }

  onButtonHover(hovered: boolean) {
    this.buttonHovered = hovered;
  }
}
