import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Phase {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  steps?: Step[];
  isVisible?: boolean;
}

interface Step {
  title: string;
  description: string;
}

interface DesignService {
  id: string;
  title: string;
  description: string;
  details: Step[];
  isVisible?: boolean;
}

@Component({
  selector: 'app-sdeprocess',
  imports: [CommonModule],
  templateUrl: './sdeprocess.html',
  styleUrl: './sdeprocess.scss'
})
export class Sdeprocess {
   headerVisible = false;
  keyPhasesHeaderVisible = false;
  designPhaseVisible = false;
  designServicesVisible = false;
  benefitsVisible = false;
  processVisible = false;

  // Main phases of software development
  keyPhases: Phase[] = [
    {
      id: 'requirement-analysis',
      title: 'Requirement Analysis',
      description: 'We will work closely with you to understand your business needs and gather project requirements. This phase is critical in ensuring that we develop a solution that meets your expectations.',
      image: '/sde/reqanysis.webp',
      steps: [
        {
          title: 'Gathering requirements',
          description: 'We will work with you to gather detailed requirements for your project.'
        },
        {
          title: 'Analysing requirements',
          description: 'Our team will analyse the requirements to ensure that we understand your needs.'
        },
        {
          title: 'Defining project scope',
          description: 'We will define the project scope, including timelines, budgets, and deliverables.'
        }
      ],
      isVisible: false
    },
    {
      id: 'design',
      title: 'Design',
      subtitle: 'Crafting Innovative Solutions with Pencil Peel IMT',
      description: 'At Pencil Peel IMT, we understand the importance of a well-designed software solution that meets your business needs. Our team of experts will work closely with you to create a robust software architecture, visually appealing UI/UX designs, and system models that outline the technical requirements for your project.',
      image: '/sde/design.webp',
      isVisible: false
    }
  ];

  // Design services breakdown (from Design phase)
  designServices: DesignService[] = [
    {
      id: 'software-architecture',
      title: 'Software Architecture',
      description: 'We will design a robust software architecture that meets your needs, ensuring that your software solution is scalable, flexible, and maintainable. Our team will:',
      details: [
        {
          title: 'Analyse requirements',
          description: 'We will analyse your business requirements and identify the technical needs of your project.'
        },
        {
          title: 'Design architecture',
          description: 'We will design a software architecture that meets your needs, taking into account factors such as scalability, performance, and security.'
        },
        {
          title: 'Validate architecture',
          description: 'We will validate the software architecture to ensure that it meets your requirements and is feasible to implement.'
        }
      ],
      isVisible: false
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Our team will create visually appealing and user-friendly UI/UX designs that enhance the user experience. We will:',
      details: [
        {
          title: 'Conduct user research',
          description: 'We will conduct user research to understand your target audience and their needs.'
        },
        {
          title: 'Create wireframes and prototypes',
          description: 'We will create wireframes and prototypes to visualize the UI/UX design and gather feedback.'
        },
        {
          title: 'Design visually appealing interfaces',
          description: 'We will design visually appealing interfaces that are consistent with your brand identity.'
        }
      ],
      isVisible: false
    },
    {
      id: 'system-models',
      title: 'System Models',
      description: 'We will provide system models that outline the technical requirements for your project. We will:',
      details: [
        {
          title: 'Create system models',
          description: 'We will create system models that outline the technical requirements for your project, including system architecture, data flows, and system interfaces.'
        },
        {
          title: 'Validate system models',
          description: 'We will validate the system models to ensure that they are accurate and complete.'
        }
      ],
      isVisible: false
    }
  ];

  // Benefits of design services
  designBenefits: string[] = [
    'Get a robust software architecture: Our team will design a robust software architecture that meets your needs and ensures the scalability, flexibility, and maintainability of your software solution.',
    'Improve user experience: Our UI/UX designs will enhance the user experience, increasing user engagement and satisfaction.',
    'Reduce technical risks: Our system models will outline the technical requirements for your project, reducing technical risks and ensuring that your project is delivered on time and within budget.'
  ];

  // Design process steps
  designProcess: Step[] = [
    {
      title: 'Understand your needs',
      description: 'We will work with you to understand your business needs and requirements.'
    },
    {
      title: 'Design solutions',
      description: 'We will design software architecture, UI/UX designs, and system models that meet your needs.'
    },
    {
      title: 'Validate designs',
      description: 'We will validate the designs to ensure that they meet your requirements and are feasible to implement.'
    },
    {
      title: 'Refine designs',
      description: 'We will refine the designs based on your feedback and ensure that they meet your needs.'
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
              case 'key-phases-header':
                setTimeout(() => this.keyPhasesHeaderVisible = true, 200);
                break;
              case 'design-phase':
                setTimeout(() => this.designPhaseVisible = true, 300);
                break;
              case 'design-services':
                setTimeout(() => this.designServicesVisible = true, 100);
                break;
              case 'benefits':
                setTimeout(() => this.benefitsVisible = true, 200);
                break;
              case 'process':
                setTimeout(() => this.processVisible = true, 300);
                break;
              case 'phase-card':
                const phaseIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.keyPhases[phaseIndex].isVisible = true;
                }, 100 + (phaseIndex * 200));
                break;
              case 'service-card':
                const serviceIndex = parseInt(element.getAttribute('data-index') || '0');
                setTimeout(() => {
                  this.designServices[serviceIndex].isVisible = true;
                }, 100 + (serviceIndex * 250));
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

}
