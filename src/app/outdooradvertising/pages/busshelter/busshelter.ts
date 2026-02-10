import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Contactus } from '../../../components/contactus/contactus';
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Industrycards } from "../../../components/industrycards/industrycards";
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { Quotes } from '../../../components/quotes/quotes';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Industry {
  title: string;
  description: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface Efficiency {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-busshelter',
  imports: [CommonModule, ButtonModule, Contactus, Whycpencilpeel, Industrycards, OutdoorHeroSection, Quotes],
  templateUrl: './busshelter.html',
  styleUrl: './busshelter.scss'
})
export class Busshelter {
  busShelterHeroConfig: HeroConfig = {
  badgeText: '#1 Bus Shelter Advertising',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Bus Shelter',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'Promote Your Brand or Product or Company Or Service. At <strong class="text-orange-600">Pencil Peel</strong>, we specialize in creating effective Bus Shelter Advertising Campaigns that drive business growth and product awareness.',
  backgroundImage: '/outdoor/busshelter/busadvetise.webp',
  typingTexts: [
    'Eye-Level Impact'
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

testimonials = [
  { text: "Take Your Brand to the Right Place with Bus Shelter Advertising - Pencil Peel IMT" },
  { text: "Shelter Your Competition with Pencil Peel IMT's Effective Bus Ads" },
  { text: "Wait, Look, and Engage with Pencil Peel IMT's Bus Shelter Ads" },
  { text: "Stop, Look, and Connect with Your Audience through Bus Shelter Advertising - Pencil Peel IMT" }
];


features: Feature[] = [
    {
      title: 'Strategic Placement',
      description: 'We will place your ads in busy areas such as city centres, business districts, and residential zones.',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'Backlit Displays',
      description: 'Our team will ensure that your ads are illuminated, providing visibility even at night or during adverse weather conditions.',
      icon: 'pi pi-lightbulb'
    },
    {
      title: 'Compact Yet Eye-Catching',
      description: 'We will design ads that are positioned at eye level, making them easy to notice and read.',
      icon: 'pi pi-eye'
    },
    {
      title: 'High Dwell Time',
      description: 'Our team will take advantage of the high dwell time of commuters waiting for buses to increase ad recall.',
      icon: 'pi pi-clock'
    }
  ];

  benefits: Benefit[] = [
    {
      title: 'Wide Audience Reach',
      description: 'We will help you reach a diverse audience, including pedestrians, passengers, and drivers.',
      icon: 'pi pi-users',
      color: 'orange'
    },
    {
      title: 'Localized Targeting',
      description: 'Our team will select specific bus shelters based on the demographic and geographic preferences of your target audience.',
      icon: 'pi pi-map',
      color: 'blue'
    },
    {
      title: 'High Frequency and Visibility',
      description: 'We will ensure regular exposure to the same audience, enhancing brand recall.',
      icon: 'pi pi-bell',
      color: 'green'
    },
    {
      title: 'Cost-Effective Medium',
      description: 'Our team will help you budget for bus shelter ads, which are relatively affordable while offering localized reach.',
      icon: 'pi pi-wallet',
      color: 'purple'
    },
    {
      title: 'All-Day Effectiveness',
      description: 'We will ensure that your ads are effective 24/7.',
      icon: 'pi pi-sun',
      color: 'yellow'
    },
    {
      title: 'High Engagement and Recall',
      description: 'Our team will create ads that engage with your target audience.',
      icon: 'pi pi-thumbs-up',
      color: 'red'
    },
    {
      title: 'Complements Other Campaigns',
      description: 'We will integrate bus shelter advertising with other media to create a cohesive marketing strategy.',
      icon: 'pi pi-link',
      color: 'teal'
    }
  ];

  services: Service[] = [
    {
      title: 'Targeted Advertising',
      description: 'We will select specific bus shelters based on the demographic and geographic preferences of your target audience.',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'Eye-Catching Designs',
      description: 'Our team will create ads that are positioned at eye level, making them easy to notice and read.',
      icon: 'pi pi-palette'
    },
    {
      title: 'High Visibility',
      description: 'We will ensure that your ads are illuminated, providing visibility even at night or during adverse weather conditions.',
      icon: 'pi pi-lightbulb'
    },
    {
      title: 'Regular Exposure',
      description: 'Our team will ensure regular exposure to the same audience, enhancing brand recall.',
      icon: 'pi pi-bell'
    },
    {
      title: 'Budget-Friendly',
      description: 'We will help you budget for bus shelter ads, which are relatively affordable while offering localized reach.',
      icon: 'pi pi-wallet'
    }
  ];

  efficiency: Efficiency[] = [
    {
      title: 'Using Data and Analytics',
      description: 'Our team will use data and analytics to select the most effective bus shelters and measure the success of your campaign.',
      icon: 'pi pi-chart-line'
    },
    {
      title: 'Creating Engaging Ads',
      description: 'We will create ads that engage with your target audience and increase brand recall.',
      icon: 'pi pi-thumbs-up'
    },
    {
      title: 'Providing Regular Updates',
      description: 'Our team will provide regular updates on the performance of your campaign.',
      icon: 'pi pi-info-circle'
    },
    {
      title: 'Optimizing Campaigns',
      description: 'We will continuously optimize your campaign to ensure maximum ROI.',
      icon: 'pi pi-cog'
    }
  ];
  contact:any = {
  title:'Contact Us Today',
  description:`By partnering with Pencil Peel IMT, you can unlock the full potential of bus shelter advertising and drive business growth. Contact us Today to learn more about our bus shelter advertising services.`
}
whyccontent = {
    title: "Why Choose Pencil Peel IMT?",
    description: "",
    footer:''
};

whycfeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has years of experience in hoarding advertising.',
    icon: 'pi-star',
    borderColor: 'yellow-500',
    iconBgColor: 'yellow-100',
    iconColor: 'yellow-600'
  },
  {
    id: 2,
    title: 'Customized Solutions',
    description: 'We will tailor our services to meet the unique needs of your business.',
    icon: 'pi-wrench',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Proven Results',
    description: 'Our team has helped numerous businesses achieve success through hoarding advertising.',
    icon: 'pi-check-circle',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  }
];
industry:any = {
  title: 'Industries that Can Benefit from Airport Advertising',
  description: 'We will help various industries reach their target audience through airport advertising. Some of the industries that can benefit from airport advertising include'
}
industryCards = [
  {
    title: 'Travel and Tourism',
    description: 'We will help travel companies, hotels, and tourism boards promote their destinations and services to travellers.',
    image: '/dm/industries/travel.webp'
  },
  {
    title: 'Luxury Brands',
    description: 'Our team will help luxury brands reach high-end travellers and business professionals.',
    image: '/dm/industries/imedspa.webp'
  },
  {
    title: 'Automotive',
    description: 'We will help automotive companies promote their vehicles to travellers.',
    image: '/dm/industries/iauto.webp'
  },
  {
    title: 'Finance and Banking',
    description: 'Our team will help financial institutions promote their services to business travellers and international visitors.',
    image: '/dm/industries/iinsurance.webp'
  },
  {
    title: 'Technology',
    description: 'We will help tech companies promote their products and services to a diverse audience.',
    image: '/dm/industries/itech.webp'
  },
  {
    title: 'Retail',
    description: 'Our team will help retailers promote their products and services to travellers.',
    image: '/dm/industries/iretail.webp'
  },
  {
    title: 'Food and Beverage',
    description: 'We will help food and beverage companies promote their products and services to travellers.',
    image: '/dm/industries/ibar.webp'
  },
  {
    title: 'Entertainment',
    description: 'Our team will help entertainment companies promote their events, shows, and attractions to travellers.',
    image: '/dm/industries/ingo.webp'
  }
];



}
