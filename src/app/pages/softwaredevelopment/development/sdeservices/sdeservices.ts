import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: Feature[];
  colorScheme: 'orange' | 'blue' | 'purple' | 'green' | 'cyan' | 'pink' | 'indigo' | 'amber';
}

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-sdeservices',
  imports: [CommonModule],
  templateUrl: './sdeservices.html',
  styleUrl: './sdeservices.scss'
})
export class Sdeservices {

  services: Service[] = [
    {
      id: 'custom-development',
      title: 'Custom Software Development',
      description: 'We will build software tailored to your unique business requirements, ensuring that the solution meets your specific needs.',
      image: '/sde/customdev.webp',
      colorScheme: 'orange',
      features: [
        {
          title: 'Requirements gathering',
          description: 'We will work with you to gather detailed requirements for your project.'
        },
        {
          title: 'Custom development',
          description: 'Our team will develop custom software solutions that meet your needs.'
        },
        {
          title: 'Testing and deployment',
          description: 'We will test and deploy the software solution to ensure that it meets the requirements.'
        }
      ]
    },
    {
      id: 'web-development',
      title: 'Web Application Development',
      description: 'Our team will develop responsive and scalable web applications that meet the needs of your business.',
      image: '/sde/webdev.webp',
      colorScheme: 'blue',
      features: [
        {
          title: 'Front-end development',
          description: 'We will develop visually appealing and user-friendly front-end interfaces.'
        },
        {
          title: 'Back-end development',
          description: 'Our team will develop robust and scalable back-end systems.'
        },
        {
          title: 'Full-stack development',
          description: 'We will develop complete web applications, including front-end and back-end.'
        }
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile Application Development',
      description: 'We will create native, hybrid, or cross-platform mobile apps that meet the needs of your business.',
      image: '/sde/mobdevelopment.webp',
      colorScheme: 'purple',
      features: [
        {
          title: 'Native app development',
          description: 'We will develop native mobile apps for iOS and Android platforms.'
        },
        {
          title: 'Hybrid app development',
          description: 'Our team will develop hybrid mobile apps that combine the benefits of native and web apps.'
        },
        {
          title: 'Cross-platform app development',
          description: 'We will develop cross-platform mobile apps that run on multiple platforms.'
        }
      ]
    },
    {
      id: 'enterprise-development',
      title: 'Enterprise Software Development',
      description: 'Our team will develop large-scale software solutions for enterprise needs, ensuring that the solution meets the complex requirements of your organization.',
      image: '/sde/enterpricedev.webp',
      colorScheme: 'green',
      features: [
        {
          title: 'Enterprise architecture',
          description: 'We will design enterprise architecture that meets the needs of your organization.'
        },
        {
          title: 'Scalability',
          description: 'Our team will develop scalable software solutions that meet the growing needs of your business.'
        },
        {
          title: 'Integration',
          description: 'We will integrate the software solution with existing systems and applications.'
        }
      ]
    },
    {
      id: 'cloud-development',
      title: 'Cloud-Based Software Development',
      description: 'We will design software solutions that operate in cloud environments, ensuring that the solution is scalable, secure, and cost-effective.',
      image: '/sde/cloudev.webp',
      colorScheme: 'cyan',
      features: [
        {
          title: 'Cloud infrastructure',
          description: 'We will design and implement cloud infrastructure that meets the needs of your business.'
        },
        {
          title: 'Cloud-based development',
          description: 'Our team will develop cloud-based software solutions that meet the needs of your business.'
        },
        {
          title: 'Cloud migration',
          description: 'We will migrate existing software solutions to cloud environments.'
        }
      ]
    },
    {
      id: 'software-integration',
      title: 'Software Integration',
      description: 'Our team will connect multiple systems or applications for seamless operations, ensuring that the solution meets the needs of your business.',
      image: '/sde/integration.webp',
      colorScheme: 'pink',
      features: [
        {
          title: 'System integration',
          description: 'We will integrate multiple systems and applications to ensure seamless operations.'
        },
        {
          title: 'API integration',
          description: 'Our team will integrate APIs to enable communication between different systems and applications.'
        },
        {
          title: 'Data integration',
          description: 'We will integrate data from different sources to provide a unified view.'
        }
      ]
    },
    {
      id: 'testing-qa',
      title: 'Software Testing and Quality Assurance (QA)',
      description: 'We will provide manual and automated testing to ensure reliability, performance, and security.',
      image: '/sde/qa.webp',
      colorScheme: 'indigo',
      features: [
        {
          title: 'Manual testing',
          description: 'Our team will perform manual testing to ensure that the software solution meets the requirements.'
        },
        {
          title: 'Automated testing',
          description: 'We will use automated testing tools to ensure that the software solution is reliable and performs well.'
        },
        {
          title: 'Quality assurance',
          description: 'We will perform quality assurance to ensure that the software solution meets the highest quality standards.'
        }
      ]
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance and Support',
      description: 'Our team will provide ongoing support to fix bugs, add features, and ensure software compatibility.',
      image: '/sde/maintenance.webp',
      colorScheme: 'amber',
      features: [
        {
          title: 'Bug fixing',
          description: 'We will fix bugs and issues that arise after deployment.'
        },
        {
          title: 'Feature updates',
          description: 'Our team will add new features and functionality to the software solution.'
        },
        {
          title: 'Compatibility updates',
          description: 'We will ensure that the software solution remains compatible with evolving technologies.'
        }
      ]
    }
  ];

  getColorClasses(colorScheme: string) {
    const colorMap = {
      orange: {
        bg: 'from-orange-400 to-orange-600',
        border: 'border-orange-200',
        text: 'text-orange-600',
        hover: 'hover:border-orange-300',
        shadow: 'hover:shadow-orange-500/20'
      },
      blue: {
        bg: 'from-blue-400 to-blue-600',
        border: 'border-blue-200',
        text: 'text-blue-600',
        hover: 'hover:border-blue-300',
        shadow: 'hover:shadow-blue-500/20'
      },
      purple: {
        bg: 'from-purple-400 to-purple-600',
        border: 'border-purple-200',
        text: 'text-purple-600',
        hover: 'hover:border-purple-300',
        shadow: 'hover:shadow-purple-500/20'
      },
      green: {
        bg: 'from-green-400 to-green-600',
        border: 'border-green-200',
        text: 'text-green-600',
        hover: 'hover:border-green-300',
        shadow: 'hover:shadow-green-500/20'
      },
      cyan: {
        bg: 'from-cyan-400 to-cyan-600',
        border: 'border-cyan-200',
        text: 'text-cyan-600',
        hover: 'hover:border-cyan-300',
        shadow: 'hover:shadow-cyan-500/20'
      },
      pink: {
        bg: 'from-pink-400 to-pink-600',
        border: 'border-pink-200',
        text: 'text-pink-600',
        hover: 'hover:border-pink-300',
        shadow: 'hover:shadow-pink-500/20'
      },
      indigo: {
        bg: 'from-indigo-400 to-indigo-600',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        hover: 'hover:border-indigo-300',
        shadow: 'hover:shadow-indigo-500/20'
      },
      amber: {
        bg: 'from-amber-400 to-amber-600',
        border: 'border-amber-200',
        text: 'text-amber-600',
        hover: 'hover:border-amber-300',
        shadow: 'hover:shadow-amber-500/20'
      }
    };
    return colorMap[colorScheme as keyof typeof colorMap] || colorMap.orange;
  }
}

