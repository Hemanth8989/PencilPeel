import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface ImpactCard {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  hoverShadow: string;
  glowBg: string;
  isVisible?: boolean;
}

@Component({
  selector: 'app-impactsection',
  imports: [CommonModule],
  templateUrl: './impactsection.html',
  styleUrl: './impactsection.scss',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class Impactsection {
  @ViewChildren('animateElement') animateElements!: QueryList<ElementRef>;

  headerVisible = false;
  impactHeaderVisible = false;
  statsVisible = false;

  impactCards: ImpactCard[] = [
    {
      icon: 'pi-bolt',
      title: 'Improved Efficiency',
      description: 'We believe that AI-driven development, DevOps automation, and cloud-native applications will improve efficiency, reduce development time, and enhance collaboration across development teams.',
      iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
      hoverShadow: 'hover:shadow-orange-500/10',
      glowBg: 'bg-gradient-to-r from-orange-500 to-orange-600',
      isVisible: false
    },
    {
      icon: 'pi-shield',
      title: 'Increased Security',
      description: 'Cybersecurity will become a top priority, and we\'re already working on implementing AI-powered tools to detect and prevent security threats.',
      iconBg: 'bg-gradient-to-br from-emerald-400 to-green-500',
      hoverShadow: 'hover:shadow-green-500/10',
      glowBg: 'bg-gradient-to-r from-green-500 to-green-600',
      isVisible: false
    },
    {
      icon: 'pi-chart-line',
      title: 'New Business Opportunities',
      description: 'We\'re excited about the potential of emerging technologies like Web3 and blockchain to create new business opportunities and revenue streams.',
      iconBg: 'bg-gradient-to-br from-blue-400 to-blue-500',
      hoverShadow: 'hover:shadow-blue-500/10',
      glowBg: 'bg-gradient-to-r from-blue-500 to-blue-600',
      isVisible: false
    }
  ];

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    // Initialize intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = element.getAttribute('data-index');
            
            if (element.classList.contains('header-section')) {
              setTimeout(() => this.headerVisible = true, 100);
            } else if (element.classList.contains('impact-header')) {
              setTimeout(() => this.impactHeaderVisible = true, 200);
            } else if (element.classList.contains('impact-card')) {
              const cardIndex = parseInt(index || '0');
              setTimeout(() => {
                this.impactCards[cardIndex].isVisible = true;
              }, 300 + (cardIndex * 150)); // staggered animation
            } else if (element.classList.contains('stats-section')) {
              setTimeout(() => this.statsVisible = true, 100);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  ngAfterViewInit(): void {
    // Observe all elements with animation
    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
    elementsToObserve.forEach(el => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
