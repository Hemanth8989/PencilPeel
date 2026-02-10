import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Outdoorproductcards } from "../../outdoorproductcards/outdoorproductcards";
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { Quotes } from '../../../components/quotes/quotes';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}
@Component({
  selector: 'app-projection-mapping-advertising',
  imports: [Benefitsnew, Whycpencilpeel, Outdoorproductcards, CardModule, CommonModule, 
    ButtonModule, OutdoorHeroSection, Industrycards, Quotes],
  templateUrl: './projection-mapping-advertising.html',
  styleUrl: './projection-mapping-advertising.scss'
})
export class ProjectionMappingAdvertising {

  testimonials = [
  { text: "Transform Your Brand with Pencil Peel IMT's Breath-taking Projection Mapping" },
  { text: "Map Your Message onto Any Surface with Pencil Peel IMT's Expertise" },
  { text: "Project Your Brand's Story with Pencil Peel IMT's Innovative Solutions" },
  { text: "Illuminate Your Brand with Pencil Peel IMT's Dynamic Projection Mapping" }
];

  
  private typingInterval: any;
  private typingText = 'Advertise Your Brand';
  private currentText = '';
  private currentIndex = 0;
  private isDeleting = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startTypingEffect();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }
  private startTypingEffect(): void {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;

    const texts = [
      'Advertise Your Brand',
      'Transform Surfaces',
      'Captivate Audiences',
      'Drive Results'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    this.typingInterval = setInterval(() => {
      const currentFullText = texts[textIndex];
      
      if (!isDeleting) {
        // Typing
        this.currentText = currentFullText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentFullText.length) {
          // Pause at end of text
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        // Deleting
        this.currentText = currentFullText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
      
      typingElement.textContent = this.currentText;
    }, isDeleting ? 50 : 100);
  }
  benefitsProjectionMapping:any = {
  title: `Benefits of <span class="text-orange-500">Projection Mapping Advertising</span> with Pencil Peel IMT`,
  description: `At <span class="text-orange-500">Pencil Peel IMT</span>, our team will help you unlock the full potential of projection mapping advertising, offering numerous benefits, including:`,
  benefits:[
    {
      icon: 'pi-megaphone',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Increased Brand Awareness',
      description: 'Projection mapping advertising helps you stand out in crowded spaces and grab attention with stunning displays that showcase your brand\'s personality and values.'
    },
    {
      icon: 'pi-sparkles',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Immersive Experiences',
      description: 'We will create immersive projection mapping experiences that engage audiences and foster memorable connections with your brand.'
    },
    {
      icon: 'pi-play-circle',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Dynamic Storytelling',
      description: 'Projection mapping allows you to tell dynamic stories that captivate audiences and convey your brand message in unique ways.'
    },
    {
      icon: 'pi-lightbulb',
      gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
      title: 'Flexibility and Creativity',
      description: 'We will explore various creative possibilities, from 2D to 3D mapping, pushing the boundaries of what\'s possible with projection mapping.'
    },
    {
      icon: 'pi-chart-line',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Measurable Results',
      description: 'Our team will help you track campaign effectiveness with metrics like engagement, reach, and conversions to measure success.'
    }
  ]
}

projectionMappingLocations = [
  {
    category: 'Outdoor Locations',
    displayName: 'Outdoor Projection Mapping Locations',
    icon: 'pi pi-map-marker',
    iconBg: 'bg-orange-500',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    image: '/outdoor/projection/projection3.webp',
    imageAlt: 'Outdoor Projection Mapping Locations',
    items: [
      {
        title: 'Building Facades',
        description: 'Our team will project stunning visuals onto building facades to grab attention.'
      },
      {
        title: 'Public Spaces',
        description: 'We will help you create immersive experiences in public spaces, such as parks and plazas.'
      },
      {
        title: 'Landmarks',
        description: 'Our team will project mapping onto iconic landmarks to create memorable experiences.'
      }
    ]
  },
  {
    category: 'Indoor Locations',
    displayName: 'Indoor Projection Mapping Locations',
    icon: 'pi pi-building',
    iconBg: 'bg-blue-500',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    image: '/outdoor/malldisplay/malldisplay1.webp',
    imageAlt: 'Indoor Projection Mapping Locations',
    items: [
      {
        title: 'Retail Stores',
        description: 'Our team will create stunning in-store displays that drive sales and engagement.'
      },
      {
        title: 'Malls and Shopping Centres',
        description: 'We will help you create immersive experiences in malls and shopping centres.'
      },
      {
        title: 'Event Spaces',
        description: 'Our team will project mapping onto event spaces to create dynamic and engaging experiences.'
      }
    ]
  },
  {
    category: 'Other Locations',
    displayName: 'Other Projection Mapping Locations',
    icon: 'pi pi-globe',
    iconBg: 'bg-green-500',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    image: '/film/fevent1.webp',
    imageAlt: 'Other Projection Mapping Locations',
    items: [
      {
        title: 'Museums and Galleries',
        description: 'Our team will create immersive exhibits that engage audiences.'
      },
      {
        title: 'Theatres and Auditoriums',
        description: 'We will help you create dynamic displays that enhance the entertainment experience.'
      },
      {
        title: 'Trade Shows and Exhibitions',
        description: 'Our team will project mapping onto trade show booths to showcase products and services.'
      }
    ]
  }
];

 processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Concept Development',
      description: 'We will develop a concept that aligns with your goals and objectives.',
      icon: 'pi pi-lightbulb',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Content Creation',
      description: 'Our team will create engaging and interactive content that resonates with your target audience.',
      icon: 'pi pi-palette',
      color: 'text-purple-600'
    },
    {
      id: 3,
      title: 'Display Design',
      description: 'We will design the projection mapping display, considering factors like surface preparation and projector placement.',
      icon: 'pi pi-desktop',
      color: 'text-green-600'
    },
    {
      id: 4,
      title: 'Installation & Deployment',
      description: 'Our team will install and deploy the projection mapping display, ensuring seamless functionality.',
      icon: 'pi pi-cog',
      color: 'text-orange-600'
    },
    {
      id: 5,
      title: 'Campaign Optimization',
      description: 'We will monitor and optimize the campaign, using data and insights to improve performance.',
      icon: 'pi pi-chart-line',
      color: 'text-red-600'
    }
  ];


whyChooseProjectionMapping: any = {
  title: "Why Choose Pencil Peel IMT for Projection Mapping Advertising?",
  description: "",
  features: [
    {
      id: 1,
      title: 'Creative Expertise',
      description: 'Our team of creatives develops engaging and interactive content that captures attention and resonates with your audience.',
      icon: 'pi-lightbulb',
      borderColor: 'orange-500',
      iconBgColor: 'orange-100',
      iconColor: 'orange-600'
    },
    {
      id: 2,
      title: 'Technical Expertise',
      description: 'Our team of technicians designs and deploys projection mapping displays that are seamless, innovative, and impactful.',
      icon: 'pi-cog',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    },
    {
      id: 3,
      title: 'Data-Driven Insights',
      description: 'We provide data-driven insights to optimize campaigns, track performance, and ensure your projection mapping advertising achieves maximum results.',
      icon: 'pi-chart-line',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    }
  ],
  footer: ""
};

heroConfig: HeroConfig = {
    badgeText: '#1 Outdoor Advertising Agency',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: 'Unlock Your',
      highlighted: [
        'Projection Mapping',
        'Advertising'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we offer innovative projection mapping advertising solutions that transform ordinary surfaces into dynamic visual displays.',
    backgroundImage: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Advertise Your Brand'
    ],
    primaryButton: {
      label: 'Start Your Campaign',
      icon: 'pi pi-arrow-right'
    },
    floatingCard: {
      text: 'Campaign Active',
      subtext: 'Live Now'
    }
  };

  projectionMappingData = {
  title: 'Industries that Require Projection Mapping for Business Success',
  description: 'Various industries can benefit from projection mapping advertising, including:',
  industries: [
    {
      title: 'Retail and e-commerce',
      image: '/industries/retail.webp',
      description: 'We will help you create stunning in-store displays and promotional campaigns that drive foot traffic and sales.',
    },
    {
      title: 'Events and entertainment',
      image: '/industries/media.webp',
      description: 'Our team will help you create immersive experiences for events, product launches, and exhibitions that captivate audiences.',
    },
    {
      title: 'Real estate and architecture',
      image: '/industries/real-estate.png',
      description: 'We will help you showcase properties and architectural designs in a unique and engaging way.',
    },
    {
      title: 'Automotive',
      image: '/industries/automotive.webp',
      description: 'Our team will help you create dynamic displays that showcase vehicles and highlight their features.',
    }
  ]
};



}
