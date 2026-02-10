import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Contactus } from "../../../components/contactus/contactus";
import { CommonModule } from '@angular/common';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
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
@Component({
  selector: 'app-hoarding',
  imports: [Whycpencilpeel, Contactus, CommonModule, OutdoorHeroSection,Quotes],
  templateUrl: './hoarding.html',
  styleUrl: './hoarding.scss'
})
export class Hoarding {
  hoardingHeroConfig: HeroConfig = {
  badgeText: '#1 Hoarding Advertising Agency',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Hoarding',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective Hoarding Advertising Campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Dominate Urban Landscapes'
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

hoardingAdvertising = [
  { text: "Build Your Brand Presence with Impactful Hoarding Advertising - Pencil Peel IMT." },
  { text: "Elevate Your Business with Strategic Hoarding Solutions - Pencil Peel IMT." },
  { text: "Make a Statement with Pencil Peel IMT's Creative Hoarding Ads." },
  { text: "Transform Your Outreach with Effective Hoarding Advertising - Pencil Peel IMT." }
];

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

contact:any = {
  title:'Contact Us Today',
  description:`By partnering with Pencil Peel IMT, you can unlock the full potential of hoarding advertising and drive business growth. Contact us Today, to learn more about our hoarding advertising services.`
}


features: Feature[] = [
    {
      title: 'Large-Scale Visibility',
      description: 'We will place your hoardings in prominent locations to capture the attention of pedestrians and commuters.',
      icon: 'pi pi-eye'
    },
    {
      title: 'Flexibility in Design',
      description: 'Our team will design engaging hoardings that feature static or printed visuals, digital displays, or even 3D elements.',
      icon: 'pi pi-palette'
    },
    {
      title: 'Strategic Placement',
      description: 'We will position your hoardings in areas with heavy footfall or traffic to ensure maximum exposure.',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'Durability',
      description: 'Our team will ensure that your hoardings are designed to withstand weather conditions for extended outdoor use.',
      icon: 'pi pi-shield'
    }
  ];

  majorBenefits: Benefit[] = [
    {
      title: 'High Visibility and Awareness',
      description: 'We will create hoardings that are hard to miss, making them ideal for creating brand awareness.',
      icon: 'pi pi-star',
      color: 'orange'
    },
    {
      title: 'Targeted Local Reach',
      description: 'Our team will place your hoardings in specific locations to target a localized audience.',
      icon: 'pi pi-compass',
      color: 'blue'
    },
    {
      title: 'Continuous Exposure',
      description: 'We will ensure that your hoardings remain visible 24/7, offering continuous exposure to a large audience over time.',
      icon: 'pi pi-clock',
      color: 'green'
    },
    {
      title: 'Cost-Effective Over Time',
      description: 'Our team will help you budget for hoarding advertising, which can be cost-effective in terms of impressions.',
      icon: 'pi pi-dollar',
      color: 'purple'
    }
  ];

  allBenefits: any[] = [
    {
      title: 'High Visibility and Awareness',
      description: 'We will create hoardings that are hard to miss, making them ideal for creating brand awareness.',
      icon: 'pi pi-star',
      color: 'orange'
    },
    {
      title: 'Targeted Local Reach',
      description: 'Our team will place your hoardings in specific locations to target a localized audience.',
      icon: 'pi pi-compass',
      color: 'blue'
    },
    {
      title: 'Continuous Exposure',
      description: 'We will ensure that your hoardings remain visible 24/7, offering continuous exposure to a large audience over time.',
      icon: 'pi pi-clock',
      color: 'green'
    },
    {
      title: 'Cost-Effective Over Time',
      description: 'Our team will help you budget for hoarding advertising, which can be cost-effective in terms of impressions.',
      icon: 'pi pi-dollar',
      color: 'purple'
    },
    {
      title: 'Creative Branding Opportunities',
      description: 'We will create innovative designs, bold messages, and visually striking imagery that leave a memorable impression.',
      icon: 'pi pi-palette',
      color: 'pink'
    },
    {
      title: 'Enhanced Site Aesthetics',
      description: 'Our team will ensure that your hoardings serve a dual purpose by promoting your brand and beautifying or concealing unsightly areas.',
      icon: 'pi pi-image',
      color: 'teal'
    },
    {
      title: 'Versatility',
      description: 'We will help you use hoarding advertising for a variety of campaigns.',
      icon: 'pi pi-wrench',
      color: 'indigo'
    },
    {
      title: 'Strengthens Campaign Synergy',
      description: 'Our team will integrate hoarding advertising with other channels to reinforce your brand message.',
      icon: 'pi pi-sitemap',
      color: 'red'
    }
  ];

  useCases: any[] = [
    {
      title: 'Promoting Real Estate Projects',
      description: 'We will create hoardings that showcase your real estate projects and attract potential buyers.',
      icon: 'pi pi-home',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Advertising in High-Traffic Areas',
      description: 'Our team will place your hoardings in high-traffic areas to maximize visibility and reach.',
      icon: 'pi pi-car',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Branding Campaigns',
      description: 'We will create hoardings that promote your brand and increase awareness.',
      icon: 'pi pi-bullseye',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Temporary Campaigns',
      description: 'Our team will help you create hoardings for temporary campaigns.',
      icon: 'pi pi-calendar',
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=800&q=80'
    }
  ];


}
