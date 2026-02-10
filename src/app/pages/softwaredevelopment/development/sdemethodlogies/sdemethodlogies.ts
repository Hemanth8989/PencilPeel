import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Methodology {
  id: string;
  title: string;
  description: string;
  image: string;
  features: Feature[];
  colorScheme: 'orange' | 'blue' | 'green';
  icon: string;
  badge: string;
  isVisible?: boolean;
}

interface Feature {
  title: string;
  description: string;
}
@Component({
  selector: 'app-sdemethodlogies',
  imports: [CommonModule],
  templateUrl: './sdemethodlogies.html',
  styleUrl: './sdemethodlogies.scss'
})
export class Sdemethodlogies {
  headerVisible = false;

  methodologies: Methodology[] = [
    {
      id: 'agile',
      title: 'Agile Methodology',
      description: 'Iterative and flexible approach that allows for rapid adaptation to changing requirements with continuous collaboration and improvement.',
      image: '/sde/methodogies/agile.webp',
      colorScheme: 'orange',
      icon: 'pi-sync',
      badge: 'Most Popular',
      features: [
        {
          title: 'Iterative and flexible approach',
          description: 'We will use an iterative and flexible approach to software development, allowing for rapid adaptation to changing requirements.'
        },
        {
          title: 'Collaboration and communication',
          description: 'Our team will work closely with clients to ensure that everyone is aligned and informed throughout the development process.'
        },
        {
          title: 'Continuous improvement',
          description: 'We will continuously review and improve our processes to ensure that we are delivering the best possible solutions.'
        }
      ],
      isVisible: false
    },
    {
      id: 'scrum',
      title: 'Scrum Methodology',
      description: 'Agile framework with sprint-based development, daily stand-ups, and retrospectives for focused work and regular review.',
      image: '/sde/methodogies/scrum.webp',
      colorScheme: 'blue',
      icon: 'pi-users',
      badge: 'Team Focused',
      features: [
        {
          title: 'Agile principles',
          description: 'Our team will implement Agile principles using the Scrum framework, allowing for rapid and flexible response to changing requirements.'
        },
        {
          title: 'Sprint-based development',
          description: 'We will break down development into sprints, allowing for focused work and regular review.'
        },
        {
          title: 'Daily stand-ups and retrospectives',
          description: 'Our team will hold daily stand-ups and retrospectives to ensure that everyone is aligned and informed.'
        }
      ],
      isVisible: false
    },
    {
      id: 'kanban',
      title: 'Kanban Methodology',
      description: 'Visual workflow management system that limits work in progress and focuses on continuous improvement and delivery.',
      image: '/sde/methodogies/kanban.webp',
      colorScheme: 'green',
      icon: 'pi-chart-bar',
      badge: 'Visual Flow',
      features: [
        {
          title: 'Visual system',
          description: 'We will use a visual system for managing work, allowing for clear visualization of the development process.'
        },
        {
          title: 'Limiting work in progress',
          description: 'Our team will limit work in progress to ensure that we are focusing on the most important tasks.'
        },
        {
          title: 'Continuous improvement',
          description: 'We will continuously review and improve our processes to ensure that we are delivering the best possible solutions.'
        }
      ],
      isVisible: false
    }
  ];

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
            const element = entry.target as HTMLElement;
            const animationType = element.getAttribute('data-animate');
            
            switch (animationType) {
              case 'main-header':
                setTimeout(() => this.headerVisible = true, 100);
                break;
              case 'methodology-card':
                const methodIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.methodologies[methodIndex].isVisible = true;
                }, 100 + (methodIndex * 300));
                break;
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  private observeElements(): void {
    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => this.observer.observe(el));
  }

  getColorClasses(colorScheme: string) {
    const colorMap = {
      orange: {
        bg: 'from-orange-400 to-orange-600',
        border: 'border-orange-200',
        text: 'text-orange-600',
        hover: 'hover:border-orange-300',
        shadow: 'hover:shadow-orange-500/20',
        badge: 'bg-orange-500'
      },
      blue: {
        bg: 'from-blue-400 to-blue-600',
        border: 'border-blue-200',
        text: 'text-blue-600',
        hover: 'hover:border-blue-300',
        shadow: 'hover:shadow-blue-500/20',
        badge: 'bg-blue-500'
      },
      green: {
        bg: 'from-green-400 to-green-600',
        border: 'border-green-200',
        text: 'text-green-600',
        hover: 'hover:border-green-300',
        shadow: 'hover:shadow-green-500/20',
        badge: 'bg-green-500'
      }
    };
    return colorMap[colorScheme as keyof typeof colorMap] || colorMap.orange;
  }
}
