import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-transist-advertising',
  imports: [CommonModule,OutdoorHeroSection, Quotes],
  templateUrl: './transist-advertising.html',
  styleUrl: './transist-advertising.scss'
})
export class TransistAdvertising {
  testimonials = [
  { text: "On the Move with Pencil Peel IMT's Effective Transit Advertising Solutions" },
  { text: "Reach Your Audience on the Go with Pencil Peel IMT's Transit Ads" },
  { text: "Drive Your Business Forward with Pencil Peel IMT's Transit Advertising Expertise" },
  { text: "Take Your Brand to the Streets with Pencil Peel IMT's Innovative Transit Solutions" }
];

  transitAdvertisingHeroConfig: HeroConfig = {
  badgeText: '#1 Transit Advertising Solutions',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Transit Advertising',
      'Solutions'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective transit advertising campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/1484071/pexels-photo-1484071.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Mobile Brand Exposure'
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

whyChooseTransitAdvertising: any = {
  title: "Why Choose Pencil Peel IMT for Transit Advertising?",
  description: "At Pencil Peel IMT, we combine expertise, creativity, and strategic planning to deliver impactful transit advertising campaigns. Our solutions are designed to increase brand visibility, engage audiences on the move, and drive measurable results.",
  features: [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has the knowledge and experience to create effective transit advertising campaigns that boost brand growth and awareness.',
      icon: 'pi-star',
      borderColor: 'yellow-500',
      iconBgColor: 'yellow-100',
      iconColor: 'yellow-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We tailor our services to align with your business goals, ensuring that every campaign meets your unique requirements.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'Our team has successfully helped numerous businesses achieve growth and visibility through impactful transit advertising.',
      icon: 'pi-chart-line',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    }
  ],
  footer: ""
};

growthCards = [
  {
    icon: 'pi pi-eye', // PrimeNG icon
    title: 'Increasing Brand Awareness',
    points: [
      'Reaching a Wide Audience: Display ads to a vast and diverse audience, increasing brand visibility.',
      'Creating Engaging Ads: Design ads that are visually appealing and capture attention.'
    ]
  },
  {
    icon: 'pi pi-shopping-cart',
    title: 'Driving Website Traffic and Sales',
    points: [
      'Targeting Relevant Audiences: Reach audiences relevant to your business.',
      'Creating Compelling Ads: Encourage users to visit your website or make a purchase.'
    ]
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Building Brand Credibility',
    points: [
      'Creating Professional Ads: Design ads that are professional and visually appealing.',
      'Consistent Branding: Ensure consistent branding across all transit ads.'
    ]
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Measuring and Optimizing Performance',
    points: [
      'Tracking Key Metrics: Measure impressions, clicks, and conversions.',
      'Optimizing Ad Performance: Use analytics to improve campaign effectiveness.'
    ]
  }
];

benefits = [
  {
    icon: 'pi pi-users',
    title: 'Wide Audience Reach',
    description: 'We will help you reach a vast and diverse audience.'
  },
  {
    icon: 'pi pi-refresh',
    title: 'Repeated Exposure',
    description: 'Regular commuters see your ads repeatedly, increasing recall and brand awareness.'
  },
  {
    icon: 'pi pi-wallet',
    title: 'Cost-Effective',
    description: 'Transit advertising offers a low cost per impression.'
  },
  {
    icon: 'pi pi-map-marker',
    title: 'Localized Targeting',
    description: 'Select specific routes or transit hubs to target local or regional audiences.'
  },
  {
    icon: 'pi pi-clock',
    title: 'Continuous Visibility',
    description: 'Your ads are visible 24/7 for maximum exposure.'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Captures a Mobile Audience',
    description: 'Engage people on the move.'
  },
  {
    icon: 'pi pi-hourglass',
    title: 'Long Dwell Times',
    description: 'Take advantage of long dwell times to increase message retention.'
  },
  {
    icon: 'pi pi-star',
    title: 'Enhances Brand Visibility',
    description: 'Create bold and creative ads that stand out.'
  }
];

}
