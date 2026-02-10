import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { ButtonModule } from 'primeng/button';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Quotes } from '../../../components/quotes/quotes';
interface CarBenefit {
  icon: string;
  gradient: string;
  title: string;
  description: string;
  points: string[];
}

interface Industry {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-car',
  imports: [CommonModule, Industrycards, ButtonModule, OutdoorHeroSection, Quotes],
  templateUrl: './car.html',
  styleUrl: './car.scss'
})
export class Car {
  carAdvertisingHeroConfig: HeroConfig = {
  badgeText: '#1 Car Advertising Solutions',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Brand Promotion with',
      'Car Advertising'
    ],
    suffix: 'at Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective car advertising campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Drive Your Brand Forward'
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
  { text: "Drive Your Business Forward with Pencil Peel IMT's Car Advertising Solutions" },
  { text: "Shift Your Brand into High Gear with Pencil Peel IMT's Car Ads" },
  { text: "Reach New Destinations with Pencil Peel IMT's Effective Car Advertising" },
  { text: "Accelerate Your Brand's Visibility with Pencil Peel IMT's Car Advertising Expertise" }
];

   carBenefits: CarBenefit[] = [
    {
      icon: 'pi pi-eye',
      gradient: 'from-orange-400 to-orange-600',
      title: 'High Visibility',
      description: 'We will ensure that your car advertisement reaches a wide and diverse audience, increasing visibility and reach for your business. Our team will:',
      points: [
        'Target high-traffic areas: We will target high-traffic areas, such as busy streets, highways, and city centres, to maximize visibility and reach.',
        'Utilize strategic ad placement: We will strategically place your car advertisements in areas where they will be seen by your target audience.'
      ]
    },
    {
      icon: 'pi pi-wallet',
      gradient: 'from-yellow-400 to-yellow-600',
      title: 'Cost-Effective',
      description: 'Car advertising is a cost-effective way to promote products and services, offering a one-time investment that can last for years. By partnering with Pencil Peel IMT, you will:',
      points: [
        'Save on advertising costs: We will help you save on advertising costs compared to other forms of advertising, such as television or print ads.',
        'Get long-term exposure: Your car advertisement will continue to generate exposure and reach for years to come, providing a long-term return on investment.'
      ]
    },
    {
      icon: 'pi pi-map-marker',
      gradient: 'from-green-400 to-green-600',
      title: 'Local Targeting',
      description: 'Our team will target potential customers in specific regions, helping you reach your target audience. We will:',
      points: [
        'Conduct market research: We will conduct market research to understand your target audience and identify areas where they are most likely to be.',
        'Develop targeted advertising campaigns: We will develop targeted advertising campaigns that reach your target audience and drive conversions.'
      ]
    },
    {
      icon: 'pi pi-car',
      gradient: 'from-cyan-400 to-blue-600',
      title: 'Mobile Billboard',
      description: 'Car advertising increases the chances of being seen by people in different areas, making it a mobile billboard that can reach a large audience. By utilizing car advertising, we will:',
      points: [
        'Increase brand visibility: We will increase brand visibility and reach a large audience through car advertising.',
        'Drive brand awareness: Our team will drive brand awareness and recognition through creative and eye-catching vehicle ads.'
      ]
    },
    {
      icon: 'pi pi-star',
      gradient: 'from-rose-400 to-pink-600',
      title: 'Memorability',
      description: 'We will create creative and eye-catching vehicle ads that are remembered by viewers, increasing brand recall and recognition. Our team will:',
      points: [
        'Develop memorable ad creative: We will develop ad creative that is memorable and resonates with your target audience.',
        'Increase brand recall: Our team will increase brand recall and recognition through effective car advertising campaigns.'
      ]
    },
    {
      icon: 'pi pi-heart',
      gradient: 'from-lime-400 to-green-600',
      title: 'Non-Intrusive',
      description: 'Car ads are a passive form of marketing that doesn\'t interrupt the audience\'s activities, making it a non-intrusive way to promote your business. By utilizing car advertising, we will:',
      points: [
        'Reach a receptive audience: We will reach a receptive audience that is more likely to engage with your brand.',
        'Increase brand awareness: Our team will increase brand awareness and drive business growth through non-intrusive car advertising.'
      ]
    },
    {
      icon: 'pi pi-clock',
      gradient: 'from-purple-400 to-indigo-600',
      title: '24/7 Advertising',
      description: 'Vehicles displaying advertisements can market your brand anytime, providing continuous exposure and reach. By partnering with Pencil Peel IMT, you will:',
      points: [
        'Get continuous exposure: Your car advertisement will continue to generate exposure and reach 24/7.',
        'Increase brand visibility: Our team will increase brand visibility and drive business growth through continuous exposure.'
      ]
    },
    {
      icon: 'pi pi-shield',
      gradient: 'from-amber-400 to-orange-600',
      title: 'Reinforces Brand Identity',
      description: 'Our team will create a professional image for your business, reinforcing your brand identity and increasing credibility. We will:',
      points: [
        'Develop a consistent brand message: We will develop a consistent brand message that resonates with your target audience.',
        'Increase credibility: Our team will increase credibility and trust with your target audience through effective car advertising campaigns.'
      ]
    },
    {
      icon: 'pi pi-plus',
      gradient: 'from-pink-400 to-purple-500',
      title: 'Scalable',
      description: 'We will help you start with one vehicle and scale up by adding more branded vehicles, allowing you to increase your reach and impact. By partnering with Pencil Peel IMT, you will:',
      points: [
        'Start small and scale up: We will help you start small and scale up your car advertising campaign as your business grows.',
        'Increase reach and impact: Our team will increase reach and impact through strategic car advertising campaigns.'
      ]
    },
    {
      icon: 'pi pi-users',
      gradient: 'from-indigo-400 to-blue-600',
      title: 'Wide Reach',
      description: 'A single vehicle can expose the advertisement to millions of people over time, providing a wide reach and impact. By utilizing car advertising, we will:',
      points: [
        'Reach a large audience: We will reach a large audience and increase brand visibility.',
        'Drive business growth: Our team will drive business growth and increase sales through effective car advertising campaigns.'
      ]
    }
  ];
  industry:any = {
    title: 'Industries that Can Benefit from Car Advertising',
    description: 'We will help various industries reach their target audience through car advertising. Some of the industries that can benefit include'
  }
  industryCards = [
    {
      title: 'Local Businesses',
      description: 'Our team will help local businesses increase brand awareness and drive foot traffic.',
      image: '/dm/industries/iecommerce.webp'
    },
    {
      title: 'Service-Based Businesses',
      description: 'We will help service-based businesses promote their services to local audiences.',
      image: '/dm/industries/iinsurance.webp'
    },
    {
      title: 'Retail',
      description: 'Our team will help retailers promote products and services to urban consumers.',
      image: '/dm/industries/iretail.webp'
    },
    {
      title: 'Food and Beverage',
      description: 'We will help food and beverage companies promote their products to local audiences.',
      image: '/dm/industries/ibar.webp'
    },
    {
      title: 'Automotive',
      description: 'Our team will help automotive companies promote their products and services.',
      image: '/dm/industries/iauto.webp'
    },
    {
      title: 'Healthcare',
      description: 'We will help healthcare companies promote their services to local audiences.',
      image: '/dm/industries/ihospital.webp'
    },
    {
      title: 'Real Estate',
      description: 'Our team will help real estate companies promote properties and services.',
      image: '/dm/industries/construction.webp'
    },
    {
      title: 'Education',
      description: 'We will help educational institutions promote their programs and services.',
      image: '/dm/industries/ieducation.webp'
    },
    {
      title: 'Financial Services',
      description: 'We will help financial services companies promote their services to local audiences.',
      image: '/dm/industries/ifinancial.webp'
    },
    {
      title: 'Home Services',
      description: 'We will help home services companies promote their services to local audiences.',
      image: '/dm/industries/iservicebb.webp'
    }
  ];
   processSteps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'We will discuss your business goals and objectives to understand your needs.',
      gradient: 'from-orange-400 to-orange-600',
      icon: 'pi pi-comments'
    },
    {
      number: 2,
      title: 'Strategy Development',
      description: 'Our team will develop a customized car advertising strategy tailored to your business.',
      gradient: 'from-blue-400 to-blue-600',
      icon: 'pi pi-lightbulb'
    },
    {
      number: 3,
      title: 'Design and Production',
      description: 'We will design and produce high-quality vehicle wraps or decals that showcase your brand.',
      gradient: 'from-purple-400 to-purple-600',
      icon: 'pi pi-palette'
    },
    {
      number: 4,
      title: 'Installation',
      description: 'Our team will install the vehicle wraps or decals on your vehicles.',
      gradient: 'from-green-400 to-green-600',
      icon: 'pi pi-wrench'
    },
    {
      number: 5,
      title: 'Campaign Monitoring',
      description: 'We will monitor the performance of the car advertising campaign and make adjustments as needed.',
      gradient: 'from-pink-400 to-pink-600',
      icon: 'pi pi-chart-line'
    }
  ];
}
