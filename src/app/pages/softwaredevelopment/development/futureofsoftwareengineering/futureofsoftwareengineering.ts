import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Trend {
  id: string;
  image: string;
  title: string;
  description: string;
  colorScheme: 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'warning';
  isVisible?: boolean;
}

interface Prediction {
  id: string;
  image: string;
  title: string;
  description: string;
  isVisible?: boolean;
}
@Component({
  selector: 'app-futureofsoftwareengineering',
  imports: [CommonModule],
  templateUrl: './futureofsoftwareengineering.html',
  styleUrl: './futureofsoftwareengineering.scss'
})

export class Futureofsoftwareengineering {
  
  headerVisible = false;
  trendsHeaderVisible = false;
  predictionsHeaderVisible = false;

  keyTrends: Trend[] = [
    {
      id: 'ai-driven',
      image: '/ai/aidev.webp',
      title: 'AI-Driven Development',
      description: 'Artificial intelligence will revolutionize software development by automating repetitive tasks, improving code generation, and enhancing testing processes. Our team is exploring AI-powered tools like GitHub Copilot and Amazon CodeWhisperer.',
      colorScheme: 'primary',
      isVisible: false
    },
    {
      id: 'low-code',
      image: '/sde/tech/nocode.webp',
      title: 'Low-Code/No-Code Platforms',
      description: 'Empowering non-technical users to build applications and automate processes, enabling businesses to create custom solutions quickly and cost-effectively.',
      colorScheme: 'secondary',
      isVisible: false
    },
    {
      id: 'cloud-native',
      image: '/sde/tech/cloud.webp',
      title: 'Cloud-Native Applications',
      description: 'Cloud computing continues to rise with organizations exploring hybrid and multi-cloud strategies to improve efficiency and scalability.',
      colorScheme: 'info',
      isVisible: false
    },
    {
      id: 'devops',
      image: '/sde/tech/devops.webp',
      title: 'DevOps Automation',
      description: 'Streamlining processes, reducing overheads, and improving collaboration between development and operations teams.',
      colorScheme: 'success',
      isVisible: false
    },
    {
      id: 'quantum',
      image: '/sde/tech/quantum.webp',
      title: 'Quantum Computing',
      description: 'Exploring the potential to disrupt fields like cryptography, AI, and complex simulations in software development.',
      colorScheme: 'accent',
      isVisible: false
    },
    {
      id: '5g-iot',
      image: '/sde/tech/5gtechnology.webp',
      title: '5G-Enabled Software & IoT',
      description: 'Unlocking possibilities for real-time applications, especially in IoT, with projects leveraging these cutting-edge technologies.',
      colorScheme: 'warning',
      isVisible: false
    },
    {
      id: 'web3',
      image: '/sde/tech/web3.webp',
      title: 'Web3 & Blockchain Development',
      description: 'Decentralized applications, NFTs, and digital ownership reshaping the internet with focus on decentralization, security, and user sovereignty.',
      colorScheme: 'primary',
      isVisible: false
    }
  ];

  predictions: Prediction[] = [
    {
      id: 'ai-adoption',
      image: '/ai/aiintegration.webp',
      title: 'Increased AI Adoption',
      description: 'AI will become increasingly prevalent, enabling developers to focus on high-value tasks and driving innovation.',
      isVisible: false
    },
    {
      id: 'skilled-demand',
      image: '/ai/aidev.webp',
      title: 'Growing Demand for Skilled Developers',
      description: 'Despite AI\'s growing role, skilled developers remain in high demand, particularly those working with quantum computing and Web3.',
      isVisible: false
    },
    {
      id: 'citizen-dev',
      image: '/sde/tech/nocode.webp',
      title: 'Shift to Citizen Development',
      description: 'Non-developers becoming "citizen developers" using low-code/no-code platforms to build custom applications and workflows.',
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
              case 'trends-header':
                setTimeout(() => this.trendsHeaderVisible = true, 200);
                break;
              case 'predictions-header':
                setTimeout(() => this.predictionsHeaderVisible = true, 100);
                break;
              case 'trend-card':
                const trendIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.keyTrends[trendIndex].isVisible = true;
                }, 100 + (trendIndex * 150));
                break;
              case 'prediction-card':
                const predictionIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.predictions[predictionIndex].isVisible = true;
                }, 100 + (predictionIndex * 200));
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
      primary: {
        border: 'border-orange-200',
        overlay: 'from-orange-500/80 to-orange-600/80',
        shadow: 'hover:shadow-orange-500/20'
      },
      secondary: {
        border: 'border-blue-200',
        overlay: 'from-blue-500/80 to-blue-600/80',
        shadow: 'hover:shadow-blue-500/20'
      },
      accent: {
        border: 'border-purple-200',
        overlay: 'from-purple-500/80 to-purple-600/80',
        shadow: 'hover:shadow-purple-500/20'
      },
      success: {
        border: 'border-emerald-200',
        overlay: 'from-emerald-500/80 to-emerald-600/80',
        shadow: 'hover:shadow-emerald-500/20'
      },
      info: {
        border: 'border-cyan-200',
        overlay: 'from-cyan-500/80 to-cyan-600/80',
        shadow: 'hover:shadow-cyan-500/20'
      },
      warning: {
        border: 'border-amber-200',
        overlay: 'from-amber-500/80 to-amber-600/80',
        shadow: 'hover:shadow-amber-500/20'
      }
    };
    return colorMap[colorScheme as keyof typeof colorMap] || colorMap.primary;
  }
}
