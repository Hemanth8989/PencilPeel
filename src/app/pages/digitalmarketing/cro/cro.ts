import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
export interface CroDefinition {
  title: string;
  description: string;
  icon: string;
  color: string;
  impact: string;
}

export interface CroProcess {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface CroPoint {
  title: string;
  description: string;
}

export interface CroBenefit {
  title: string;
  description: string;
  icon: string;
  color: string;
  points: CroPoint[];
  impact: string;
}

export interface CroStrategy {
  title: string;
  icon: string;
  color: string;
  points: CroPoint[];
}

export interface WhyChooseReason {
  title: string;
  description: string;
  icon: string;
  color: string;
}
@Component({
  selector: 'app-cro',
  imports: [Nocarouselherosection,CommonModule,CardModule],
  templateUrl: './cro.html',
  styleUrl: './cro.scss'
})
export class Cro {
  herocontent = {
  title: `
    Maximize Your Digital Performance with 
    <span class="bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 bg-clip-text text-transparent font-bold tracking-tight">
      Conversion Rate Optimization (CRO)
    </span> 
    by 
    <span class="bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'We help you turn more visitors into customers with data-backed strategies, A/B testing, and performance enhancements that improve user experience and drive higher conversions.',
  image: '/dm/services/conversionrateopt.webp' // Replace with your actual image path
};
conversionTypes: any[] = [
{
      title: 'Making a Purchase',
      description: 'Completing a transaction on an e-commerce website.',
      icon: 'pi pi-shopping-cart',
      color: 'green',
    },
    {
      title: 'Completing a Form',
      description: 'Filling out a contact form, survey, or registration form.',
      icon: 'pi pi-file-edit',
      color: 'blue',
    },
    {
      title: 'Subscribing to Email List',
      description: 'Signing up for newsletters, promotions, or updates.',
      icon: 'pi pi-envelope',
      color: 'purple',
    },
    {
      title: 'Downloading Content',
      description: 'Downloading e-books, whitepapers, or other digital resources.',
      icon: 'pi pi-download',
      color: 'orange',
    }
  ];

  croGoals: any[] = [
    {
      title: 'Improving User Experience',
      description: 'Enhancing the overall user experience to make it easy and intuitive for visitors to take the desired action.',
      icon: 'pi pi-user',
      color: 'blue',
      benefits: [
        'Simplified navigation and user flow',
        'Mobile-responsive design optimization',
        'Faster page loading speeds',
        'Intuitive interface design'
      ]
    },
    {
      title: 'Optimizing Website Elements',
      description: 'Refining website elements such as layout, content, and calls-to-action (CTAs) to increase conversions.',
      icon: 'pi pi-cog',
      color: 'emerald',
      benefits: [
        'Strategic CTA placement and design',
        'Content optimization for engagement',
        'Layout improvements for better flow',
        'Visual hierarchy enhancement'
      ]
    },
    {
      title: 'Increasing Conversions',
      description: 'Ultimately, the goal of CRO is to increase the number of conversions and achieve business objectives.',
      icon: 'pi pi-chart-line',
      color: 'purple',
      benefits: [
        'Higher conversion rates across all channels',
        'Improved ROI on marketing spend',
        'Better customer acquisition metrics',
        'Enhanced business performance'
      ]
    }
  ];
  croDefinitions: CroDefinition[] = [
    {
      title: 'Improving Conversion Rates',
      description: 'We\'ll help improve conversion rates by optimizing your website and digital marketing campaigns.',
      icon: 'pi pi-chart-line',
      color: 'purple',
      impact: '+250%'
    },
    {
      title: 'Maximizing ROI',
      description: 'Our team will maximize return on investment (ROI) by increasing conversions and reducing bounce rates.',
      icon: 'pi pi-dollar',
      color: 'indigo',
      impact: '+300%'
    }
  ];

  croProcess: CroProcess[] = [
    {
      title: 'Data Analysis',
      description: 'We\'ll analyse data to identify areas of improvement and opportunities for growth.',
      icon: 'pi pi-chart-bar',
      color: 'blue'
    },
    {
      title: 'A/B Testing',
      description: 'Our team will conduct A/B testing to determine the most effective elements of your website and digital marketing campaigns.',
      icon: 'pi pi-sliders-h',
      color: 'green'
    },
    {
      title: 'User Experience (UX) Design',
      description: 'We\'ll improve user experience (UX) design to make it easy for visitors to convert.',
      icon: 'pi pi-user',
      color: 'purple'
    },
    {
      title: 'Continuous Optimization',
      description: 'Our team will continuously optimize and refine your website and digital marketing campaigns.',
      icon: 'pi pi-refresh',
      color: 'orange'
    }
  ];

  croBenefits: CroBenefit[] = [
    {
      title: 'Increased Conversions',
      description: 'Drive more leads and sales through optimized conversion strategies.',
      icon: 'pi pi-chart-line',
      color: 'green',
      points: [
        {
          title: 'More Leads and Sales',
          description: 'We\'ll help increase conversions, resulting in more leads and sales for your business'
        },
        {
          title: 'Improved Conversion Rates',
          description: 'Our team will optimize your website and digital marketing campaigns to improve conversion rates'
        }
      ],
      impact: '+180%'
    },
    {
      title: 'Improved ROI',
      description: 'Maximize your return on investment through strategic optimization.',
      icon: 'pi pi-dollar',
      color: 'blue',
      points: [
        {
          title: 'Maximized Return on Investment',
          description: 'We\'ll help maximize ROI by increasing conversions and reducing costs'
        },
        {
          title: 'Better Budget Allocation',
          description: 'Our team will ensure that your marketing budget is allocated effectively to drive conversions'
        }
      ],
      impact: '+250%'
    },
    {
      title: 'Enhanced User Experience',
      description: 'Create seamless experiences that convert visitors into customers.',
      icon: 'pi pi-user',
      color: 'purple',
      points: [
        {
          title: 'Improved Website Usability',
          description: 'We\'ll enhance website usability to make it easy for visitors to navigate and convert'
        },
        {
          title: 'Personalized Experience',
          description: 'Our team will create a personalized experience for your website visitors'
        }
      ],
      impact: '+200%'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with optimized marketing strategies.',
      icon: 'pi pi-trophy',
      color: 'orange',
      points: [
        {
          title: 'Stay Ahead of Competitors',
          description: 'We\'ll help you stay ahead of your competitors by optimizing your website and digital marketing campaigns'
        },
        {
          title: 'Unique Value Proposition',
          description: 'Our team will help you communicate your unique value proposition effectively'
        }
      ],
      impact: '+150%'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Make informed decisions based on comprehensive data analysis.',
      icon: 'pi pi-chart-bar',
      color: 'teal',
      points: [
        {
          title: 'Informed Decision Making',
          description: 'We\'ll provide data-driven insights to inform decision making and optimize your campaigns'
        },
        {
          title: 'Continuous Improvement',
          description: 'Our team will continuously monitor and improve your website and digital marketing campaigns'
        }
      ],
      impact: '+220%'
    },
    {
      title: 'Increased Customer Satisfaction',
      description: 'Deliver exceptional experiences that build customer loyalty.',
      icon: 'pi pi-heart',
      color: 'pink',
      points: [
        {
          title: 'Improved Customer Experience',
          description: 'We\'ll help improve customer satisfaction by providing a seamless and intuitive user experience'
        },
        {
          title: 'Increased Customer Loyalty',
          description: 'Our team will help increase customer loyalty by delivering a positive experience'
        }
      ],
      impact: '+190%'
    }
  ];

  croStrategies: CroStrategy[] = [
    {
      title: 'Landing Page Optimization',
      icon: 'pi pi-window-maximize',
      color: 'blue',
      points: [
        {
          title: 'Clear and Concise Messaging',
          description: 'We\'ll create clear and concise messaging that resonates with your target audience'
        },
        {
          title: 'Relevant and High-Quality Content',
          description: 'Our team will create relevant and high-quality content that addresses the needs of your target audience'
        },
        {
          title: 'Visually Appealing Design',
          description: 'We\'ll design visually appealing landing pages that capture the attention of your target audience'
        }
      ]
    },
    {
      title: 'Call-to-Action (CTA) Optimization',
      icon: 'pi pi-send',
      color: 'green',
      points: [
        {
          title: 'Prominent CTAs',
          description: 'We\'ll make CTAs prominent and easily accessible to encourage visitors to take action'
        },
        {
          title: 'Action-Oriented Language',
          description: 'Our team will use action-oriented language that encourages visitors to take action'
        },
        {
          title: 'A/B Testing',
          description: 'We\'ll conduct A/B testing to determine the most effective CTAs'
        }
      ]
    },
    {
      title: 'Form Optimization',
      icon: 'pi pi-file-edit',
      color: 'purple',
      points: [
        {
          title: 'Simple and Short Forms',
          description: 'We\'ll create simple and short forms that reduce friction and increase conversions'
        },
        {
          title: 'Clear and Concise Labels',
          description: 'Our team will use clear and concise labels that make it easy for visitors to understand'
        },
        {
          title: 'Auto-Fill and Validation',
          description: 'We\'ll use auto-fill and validation to make it easy for visitors to complete forms'
        }
      ]
    },
    {
      title: 'Mobile Optimization',
      icon: 'pi pi-mobile',
      color: 'orange',
      points: [
        {
          title: 'Responsive Design',
          description: 'We\'ll create responsive designs that adapt to different screen sizes and devices'
        },
        {
          title: 'Fast Loading Speed',
          description: 'Our team will optimize mobile experiences to ensure fast loading speeds'
        },
        {
          title: 'Easy Navigation',
          description: 'We\'ll make it easy for visitors to navigate your website on mobile devices'
        }
      ]
    },
    {
      title: 'A/B Testing and Multivariate Testing',
      icon: 'pi pi-sliders-h',
      color: 'teal',
      points: [
        {
          title: 'Data-Driven Decision Making',
          description: 'We\'ll use A/B testing and multivariate testing to inform data-driven decision making'
        },
        {
          title: 'Continuous Improvement',
          description: 'Our team will continuously test and optimize your website and digital marketing campaigns'
        }
      ]
    },
    {
      title: 'User Experience (UX) Design',
      icon: 'pi pi-user',
      color: 'indigo',
      points: [
        {
          title: 'Intuitive Navigation',
          description: 'We\'ll create intuitive navigation that makes it easy for visitors to find what they\'re looking for'
        },
        {
          title: 'Clear and Concise Content',
          description: 'Our team will create clear and concise content that addresses the needs of your target audience'
        },
        {
          title: 'Visually Appealing Design',
          description: 'We\'ll design visually appealing websites that capture the attention of your target audience'
        }
      ]
    },
    {
      title: 'Heat map and Click-Tracking Analysis',
      icon: 'pi pi-eye',
      color: 'pink',
      points: [
        {
          title: 'Understanding User Behaviour',
          description: 'We\'ll use heat map and click-tracking analysis to understand user behaviour'
        },
        {
          title: 'Identifying Areas for Improvement',
          description: 'Our team will identify areas for improvement and optimize your website accordingly'
        }
      ]
    },
    {
      title: 'Personalization',
      icon: 'pi pi-star',
      color: 'yellow',
      points: [
        {
          title: 'Tailored Experience',
          description: 'We\'ll create a tailored experience for your website visitors based on their behaviour, preferences, and interests'
        },
        {
          title: 'Increased Conversions',
          description: 'Our team will increase conversions by providing a personalized experience'
        }
      ]
    }
  ];

  whyChooseUs: WhyChooseReason[] = [
    {
      title: 'Expertise',
      description: 'Our team has extensive experience in CRO and digital marketing.',
      icon: 'pi pi-star',
      color: 'orange'
    },
    {
      title: 'Data-Driven Approach',
      description: 'We\'ll use data and analytics to inform CRO decisions.',
      icon: 'pi pi-chart-bar',
      color: 'blue'
    },
    {
      title: 'Personalized Service',
      description: 'Our team will tailor our services to meet your unique needs and goals.',
      icon: 'pi pi-user',
      color: 'purple'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialize component
  }

  // Conversion Types Styling Methods
  getConversionHeaderGradient(color: string): string {
    const gradients = {
      'green': 'bg-gradient-to-br from-green-500 to-green-600',
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'orange': 'bg-gradient-to-br from-orange-500 to-orange-600'
    };
    return gradients[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getConversionBg(color: string): string {
    const backgrounds = {
      'green': 'bg-green-50',
      'blue': 'bg-blue-50',
      'purple': 'bg-purple-50',
      'orange': 'bg-orange-50'
    };
    return backgrounds[color] || 'bg-gray-50';
  }

  getConversionTextColor(color: string): string {
    const textColors = {
      'green': 'text-green-600',
      'blue': 'text-blue-600',
      'purple': 'text-purple-600',
      'orange': 'text-orange-600'
    };
    return textColors[color] || 'text-gray-600';
  }

  // CRO Goals Styling Methods
  getCroHeaderGradient(color: string): string {
    const gradients = {
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'emerald': 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600'
    };
    return gradients[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getCroBenefitBg(color: string): string {
    const backgrounds = {
      'blue': 'bg-blue-50 hover:bg-blue-100',
      'emerald': 'bg-emerald-50 hover:bg-emerald-100',
      'purple': 'bg-purple-50 hover:bg-purple-100'
    };
    return backgrounds[color] || 'bg-gray-50 hover:bg-gray-100';
  }

  getCroImpactBg(color: string): string {
    const backgrounds = {
      'blue': 'bg-blue-50',
      'emerald': 'bg-emerald-50',
      'purple': 'bg-purple-50'
    };
    return backgrounds[color] || 'bg-gray-50';
  }

  getCroTextColor(color: string): string {
    const textColors = {
      'blue': 'text-blue-600',
      'emerald': 'text-emerald-600',
      'purple': 'text-purple-600'
    };
    return textColors[color] || 'text-gray-600';
  }

  getDefinitionHeaderGradient(color: string): string {
    const gradients = {
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'indigo': 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    };
    return gradients[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getDefinitionBg(color: string): string {
    const backgrounds = {
      'purple': 'bg-purple-50',
      'indigo': 'bg-indigo-50'
    };
    return backgrounds[color] || 'bg-gray-50';
  }

  getDefinitionTextColor(color: string): string {
    const textColors = {
      'purple': 'text-purple-600',
      'indigo': 'text-indigo-600'
    };
    return textColors[color] || 'text-gray-600';
  }

  // Process Styling Methods
  getProcessHeaderBg(color: string): string {
    const backgrounds = {
      'blue': 'bg-blue-50',
      'green': 'bg-green-50',
      'purple': 'bg-purple-50',
      'orange': 'bg-orange-50'
    };
    return backgrounds[color] || 'bg-gray-50';
  }

  getProcessIconBg(color: string): string {
    const iconBgs = {
      'blue': 'bg-blue-100',
      'green': 'bg-green-100',
      'purple': 'bg-purple-100',
      'orange': 'bg-orange-100'
    };
    return iconBgs[color] || 'bg-gray-100';
  }

  getProcessTextColor(color: string): string {
    const textColors = {
      'blue': 'text-blue-600',
      'green': 'text-green-600',
      'purple': 'text-purple-600',
      'orange': 'text-orange-600'
    };
    return textColors[color] || 'text-gray-600';
  }

  // Benefit Styling Methods
  getBenefitHeaderGradient(color: string): string {
    const gradients = {
      'green': 'bg-gradient-to-br from-green-500 to-green-600',
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'orange': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'teal': 'bg-gradient-to-br from-teal-500 to-teal-600',
      'pink': 'bg-gradient-to-br from-pink-500 to-pink-600'
    };
    return gradients[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getBenefitPointBg(color: string): string {
    const backgrounds = {
      'green': 'bg-green-50 hover:bg-green-100',
      'blue': 'bg-blue-50 hover:bg-blue-100',
      'purple': 'bg-purple-50 hover:bg-purple-100',
      'orange': 'bg-orange-50 hover:bg-orange-100',
      'teal': 'bg-teal-50 hover:bg-teal-100',
      'pink': 'bg-pink-50 hover:bg-pink-100'
    };
    return backgrounds[color] || 'bg-gray-50 hover:bg-gray-100';
  }

  getBenefitImpactBg(color: string): string {
    const backgrounds = {
      'green': 'bg-green-50',
      'blue': 'bg-blue-50',
      'purple': 'bg-purple-50',
      'orange': 'bg-orange-50',
      'teal': 'bg-teal-50',
      'pink': 'bg-pink-50'
    };
    return backgrounds[color] || 'bg-gray-50';
  }

  getBenefitTextColor(color: string): string {
    const textColors = {
      'green': 'text-green-600',
      'blue': 'text-blue-600',
      'purple': 'text-purple-600',
      'orange': 'text-orange-600',
      'teal': 'text-teal-600',
      'pink': 'text-pink-600'
    };
    return textColors[color] || 'text-gray-600';
  }

  // Strategy Styling Methods
  getStrategyHeaderGradient(color: string): string {
    const gradients = {
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'green': 'bg-gradient-to-br from-green-500 to-green-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'orange': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'teal': 'bg-gradient-to-br from-teal-500 to-teal-600',
      'indigo': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'pink': 'bg-gradient-to-br from-pink-500 to-pink-600',
      'yellow': 'bg-gradient-to-br from-yellow-500 to-yellow-600'
    };
    return gradients[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getStrategyPointBg(color: string): string {
    const backgrounds = {
      'blue': 'bg-blue-50 hover:bg-blue-100',
      'green': 'bg-green-50 hover:bg-green-100',
      'purple': 'bg-purple-50 hover:bg-purple-100',
      'orange': 'bg-orange-50 hover:bg-orange-100',
      'teal': 'bg-teal-50 hover:bg-teal-100',
      'indigo': 'bg-indigo-50 hover:bg-indigo-100',
      'pink': 'bg-pink-50 hover:bg-pink-100',
      'yellow': 'bg-yellow-50 hover:bg-yellow-100'
    };
    return backgrounds[color] || 'bg-gray-50 hover:bg-gray-100';
  }

  getStrategyTextColor(color: string): string {
    const textColors = {
      'blue': 'text-blue-600',
      'green': 'text-green-600',
      'purple': 'text-purple-600',
      'orange': 'text-orange-600',
      'teal': 'text-teal-600',
      'indigo': 'text-indigo-600',
      'pink': 'text-pink-600',
      'yellow': 'text-yellow-600'
    };
    return textColors[color] || 'text-gray-600';
  }

  // Why Choose Us Styling Methods
  getChooseHeaderGradient(color: string): string {
    const gradients = {
      'orange': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600'
    };
    return gradients[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  // Action Methods
  startCroCampaign(): void {
    console.log('Starting CRO campaign');
    // Add your navigation or form logic here
  }

  contactUs(): void {
    console.log('Contacting Pencil Peel');
    // Add your navigation or form logic here
  }

}
