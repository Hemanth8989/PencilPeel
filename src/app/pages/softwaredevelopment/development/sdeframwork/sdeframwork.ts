import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TruncatePipe } from "../../../../pipes/truncate-pipe";
interface Framework {
  id: string;
  name: string;
  description: string;
  svgPath: string; // Changed from icon to svgPath
  features: Feature[];
  category: 'primary' | 'secondary';
  colorScheme: 'orange' | 'blue' | 'green' | 'purple' | 'red' | 'indigo' | 'pink' | 'cyan';
  badge?: string;
  isVisible?: boolean;
}

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-sdeframwork',
  imports: [CommonModule, DialogModule, ButtonModule, TruncatePipe],
  templateUrl: './sdeframwork.html',
  styleUrl: './sdeframwork.scss'
})
export class Sdeframwork{

  headerVisible = false;
  
  // Dialog properties
  displayDialog: boolean = false;
  selectedFramework: Framework | null = null;

  // Primary frameworks with SVG paths
  primaryFrameworks: Framework[] = [
    {
      id: 'react',
      name: 'React',
      description: 'Fast and scalable library for building user interfaces with component-based architecture and virtual DOM.',
      svgPath: '/svg/react.svg',
      category: 'primary',
      colorScheme: 'blue',
      badge: 'Popular',
      features: [
        {
          title: 'Fast and scalable',
          description: 'We will use React to build fast and scalable user interfaces, leveraging its component-based architecture and virtual DOM.'
        },
        {
          title: 'Maintainable',
          description: 'React\'s component-based architecture makes it easy to maintain and update user interfaces.'
        },
        {
          title: 'Large community',
          description: 'React has a large and active community, ensuring that there are many resources available for learning and troubleshooting.'
        }
      ],
      isVisible: false
    },
    {
      id: 'angular',
      name: 'Angular',
      description: 'Complex and scalable framework for developing enterprise-level web applications with robust features and tools.',
      svgPath: '/svg/angular.svg',
      category: 'primary',
      colorScheme: 'red',
      badge: 'Enterprise',
      features: [
        {
          title: 'Complex and scalable',
          description: 'Our team will utilize Angular to develop complex and scalable web applications, leveraging its robust features and tools.'
        },
        {
          title: 'MVC architecture',
          description: 'Angular\'s MVC architecture makes it easy to separate concerns and manage complex applications.'
        },
        {
          title: 'Extensive libraries',
          description: 'Angular has extensive libraries and tools, making it easy to build feature-rich web applications.'
        }
      ],
      isVisible: false
    },
    {
      id: 'vuejs',
      name: 'Vue.js',
      description: 'Progressive and flexible framework for building web applications with simplicity and ease of use.',
      svgPath: '/svg/vue.svg',
      category: 'primary',
      colorScheme: 'green',
      badge: 'Progressive',
      features: [
        {
          title: 'Progressive and flexible',
          description: 'We will use Vue.js to build progressive and flexible web applications, leveraging its simplicity and ease of use.'
        },
        {
          title: 'Component-based',
          description: 'Vue.js\'s component-based architecture makes it easy to build and maintain complex user interfaces.'
        },
        {
          title: 'Growing ecosystem',
          description: 'Vue.js has a growing ecosystem of tools and libraries, making it an exciting choice for web development.'
        }
      ],
      isVisible: false
    },
    {
      id: 'ruby-on-rails',
      name: 'Ruby on Rails',
      description: 'Robust and scalable web framework with Model-View-Controller architecture and extensive libraries.',
      svgPath: '/svg/ruby.svg',
      category: 'primary',
      colorScheme: 'red',
      badge: 'Full-Stack',
      features: [
        {
          title: 'Robust and scalable',
          description: 'Our team will use Ruby on Rails to develop robust and scalable web applications, leveraging its Model-View-Controller (MVC) architecture and extensive libraries.'
        },
        {
          title: 'Rapid development',
          description: 'Ruby on Rails\' batteries-included approach makes it easy to build web applications quickly and efficiently.'
        },
        {
          title: 'Large community',
          description: 'Ruby on Rails has a large and active community, ensuring that there are many resources available for learning and troubleshooting.'
        }
      ],
      isVisible: false
    }
  ];

  // Secondary frameworks with SVG paths
  secondaryFrameworks: Framework[] = [
    {
      id: 'django',
      name: 'Django',
      description: 'High-level Python web framework for building complex and scalable applications.',
      svgPath: '/svg/django.svg',
      category: 'secondary',
      colorScheme: 'green',
      features: [
        {
          title: 'Complex and scalable applications',
          description: 'We will use Django to build complex and scalable web applications, leveraging its high-level architecture and extensive libraries.'
        }
      ],
      isVisible: false
    },
    {
      id: 'laravel',
      name: 'Laravel',
      description: 'Elegant PHP framework for robust and scalable web application development.',
      svgPath: '/svg/laravel.svg',
      category: 'secondary',
      colorScheme: 'red',
      features: [
        {
          title: 'Robust and scalable applications',
          description: 'Our team will utilize Laravel to develop robust and scalable web applications, leveraging its PHP framework and extensive libraries.'
        }
      ],
      isVisible: false
    },
    {
      id: 'expressjs',
      name: 'Express.js',
      description: 'Fast and flexible Node.js web framework with lightweight and modular architecture.',
      svgPath: '/svg/expressjs.svg',
      category: 'secondary',
      colorScheme: 'green',
      features: [
        {
          title: 'Fast and flexible applications',
          description: 'We will use Express.js to build fast and flexible web applications, leveraging its lightweight and modular architecture.'
        }
      ],
      isVisible: false
    },
    {
      id: 'spring-boot',
      name: 'Spring Boot',
      description: 'Java-based framework for developing robust and scalable enterprise applications.',
      svgPath: '/svg/spring.svg',
      category: 'secondary',
      colorScheme: 'green',
      features: [
        {
          title: 'Robust and scalable applications',
          description: 'Our team will use Spring Boot to develop robust and scalable web applications, leveraging its Java-based architecture and extensive libraries.'
        }
      ],
      isVisible: false
    },
    {
      id: 'react-native',
      name: 'React Native',
      description: 'Cross-platform mobile development framework for iOS and Android applications.',
      svgPath: '/svg/react.svg',
      category: 'secondary',
      colorScheme: 'blue',
      features: [
        {
          title: 'Cross-platform mobile applications',
          description: 'We will use React Native to build cross-platform mobile applications, leveraging its ability to share code between iOS and Android platforms.'
        }
      ],
      isVisible: false
    },
    {
      id: 'flutter',
      name: 'Flutter',
      description: 'Fast and scalable mobile framework with widget-based architecture.',
      svgPath: '/svg/flutter.svg',
      category: 'secondary',
      colorScheme: 'blue',
      features: [
        {
          title: 'Fast and scalable mobile applications',
          description: 'Our team will utilize Flutter to build fast and scalable mobile applications, leveraging its widget-based architecture and extensive libraries.'
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
              case 'primary-framework':
                const primaryIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.primaryFrameworks[primaryIndex].isVisible = true;
                }, 100 + (primaryIndex * 150));
                break;
              case 'secondary-framework':
                const secondaryIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.secondaryFrameworks[secondaryIndex].isVisible = true;
                }, 100 + (secondaryIndex * 100));
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

  // Show dialog method
  showFrameworkDetails(framework: Framework): void {
    this.selectedFramework = framework;
    this.displayDialog = true;
  }

  // Hide dialog method
  hideDialog(): void {
    this.displayDialog = false;
    this.selectedFramework = null;
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
      },
      purple: {
        bg: 'from-purple-400 to-purple-600',
        border: 'border-purple-200',
        text: 'text-purple-600',
        hover: 'hover:border-purple-300',
        shadow: 'hover:shadow-purple-500/20',
        badge: 'bg-purple-500'
      },
      red: {
        bg: 'from-red-400 to-red-600',
        border: 'border-red-200',
        text: 'text-red-600',
        hover: 'hover:border-red-300',
        shadow: 'hover:shadow-red-500/20',
        badge: 'bg-red-500'
      },
      indigo: {
        bg: 'from-indigo-400 to-indigo-600',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        hover: 'hover:border-indigo-300',
        shadow: 'hover:shadow-indigo-500/20',
        badge: 'bg-indigo-500'
      },
      pink: {
        bg: 'from-pink-400 to-pink-600',
        border: 'border-pink-200',
        text: 'text-pink-600',
        hover: 'hover:border-pink-300',
        shadow: 'hover:shadow-pink-500/20',
        badge: 'bg-pink-500'
      },
      cyan: {
        bg: 'from-cyan-400 to-cyan-600',
        border: 'border-cyan-200',
        text: 'text-cyan-600',
        hover: 'hover:border-cyan-300',
        shadow: 'hover:shadow-cyan-500/20',
        badge: 'bg-cyan-500'
      }
    };
    return colorMap[colorScheme as keyof typeof colorMap] || colorMap.orange;
  }
}
