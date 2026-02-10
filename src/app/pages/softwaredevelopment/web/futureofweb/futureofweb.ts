import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Trend {
  id: string;
  title: string;
  description: string;
  image: string;
  colorScheme: 'orange' | 'blue' | 'green' | 'purple' | 'cyan' | 'pink';
  isVisible?: boolean;
}

interface Commitment {
  id: string;
  title: string;
  description: string;
  image: string;
  isVisible?: boolean;
}
@Component({
  selector: 'app-futureofweb',
  imports: [CommonModule],
  templateUrl: './futureofweb.html',
  styleUrl: './futureofweb.scss'
})
export class Futureofweb {
  
  headerVisible = false;
  trendsHeaderVisible = false;
  commitmentsHeaderVisible = false;

  keyTrendsTitle = "Key Trends:";
  keyTrends: Trend[] = [
    {
      id: 'responsive',
      title: 'Responsive Design',
      description: 'We\'ll prioritize responsive design, ensuring that websites are optimized for various devices and screen sizes.',
      image: '/sde/design.webp',
      colorScheme: 'blue',
      isVisible: false
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'We\'ll explore the potential of AI in web design, using tools like AI-powered design assistants to enhance creativity and efficiency.',
      image: '/ai/aidev.webp',
      colorScheme: 'purple',
      isVisible: false
    },
    {
      id: 'voice',
      title: 'Voice UI',
      description: 'We\'ll design websites that are compatible with voice UI, enabling users to interact with websites using voice commands.',
      image: '/sde/voice.png',
      colorScheme: 'green',
      isVisible: false
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      description: 'We\'ll focus on sustainable web design, reducing the environmental impact of digital products and services.',
      image: '/sde/webdesign.webp',
      colorScheme: 'green',
      isVisible: false
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      description: 'We\'ll prioritize accessibility, ensuring that websites are usable by everyone, regardless of abilities.',
      image: '/sde/webdev.webp',
      colorScheme: 'orange',
      isVisible: false
    }
  ];

  commitmentTitle = "Our Commitment to Growth and Innovation";
  commitmentDescription = "At Pencil Peel IMT, we're committed to growing with technology updates, and we're always looking for ways to improve our skills and knowledge. With our huge experience and great knowledge in software design and development, we're confident that we can deliver high-quality web design solutions that meet the evolving needs of our clients.";

  whatToExpectTitle = "What to Expect from Us:";
  commitments: Commitment[] = [
    {
      id: 'innovation',
      title: 'Innovative Solutions',
      description: 'We\'ll continue to push the boundaries of web design, using the latest technologies and trends to create innovative solutions.',
      image: '/sde/customdev.webp',
      isVisible: false
    },
    {
      id: 'user-centric',
      title: 'User-Centric Design',
      description: 'We\'ll prioritize user experience, designing websites that are intuitive, accessible, and engaging.',
      image: '/sde/design.png',
      isVisible: false
    },
    {
      id: 'collaborative',
      title: 'Collaborative Approach',
      description: 'We\'ll work closely with our clients, ensuring that their needs and goals are met throughout the design process.',
      image: '/sde/devops.webp',
      isVisible: false
    }
  ];

  growthTitle = "Growing with Technology Updates";
  growthDescription = "We'll stay up-to-date with the latest technologies and trends, ensuring that our clients receive the best possible solutions. Our team will continue to learn and grow, expanding our expertise in web design and development.";

  resultsTitle = "Delivering Exceptional Results";
  resultsDescription = "With our huge experience and great knowledge in software design and development, we're confident that we can deliver exceptional web design solutions that meet the needs of our clients. Contact us today to learn more about how we can help you achieve your goals.";

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
              case 'trends-header':
                setTimeout(() => this.trendsHeaderVisible = true, 100);
                break;
              case 'trend-card':
                const trendIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.keyTrends[trendIndex].isVisible = true;
                }, 100 + (trendIndex * 150));
                break;
              case 'commitments-header':
                setTimeout(() => this.commitmentsHeaderVisible = true, 100);
                break;
              case 'commitment-card':
                const commitmentIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.commitments[commitmentIndex].isVisible = true;
                }, 100 + (commitmentIndex * 150));
                break;
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

  private observeElements(): void {
    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => this.observer.observe(el));
  }

  getColorClasses(colorScheme: string) {
    const colorMap = {
      orange: {
        border: 'border-orange-200',
        shadow: 'hover:shadow-orange-500/20',
        overlay: 'from-orange-600/80'
      },
      blue: {
        border: 'border-blue-200',
        shadow: 'hover:shadow-blue-500/20',
        overlay: 'from-blue-600/80'
      },
      green: {
        border: 'border-green-200',
        shadow: 'hover:shadow-green-500/20',
        overlay: 'from-green-600/80'
      },
      purple: {
        border: 'border-purple-200',
        shadow: 'hover:shadow-purple-500/20',
        overlay: 'from-purple-600/80'
      },
      cyan: {
        border: 'border-cyan-200',
        shadow: 'hover:shadow-cyan-500/20',
        overlay: 'from-cyan-600/80'
      },
      pink: {
        border: 'border-pink-200',
        shadow: 'hover:shadow-pink-500/20',
        overlay: 'from-pink-600/80'
      }
    };
    return colorMap[colorScheme as keyof typeof colorMap] || colorMap.orange;
  }
  
}
