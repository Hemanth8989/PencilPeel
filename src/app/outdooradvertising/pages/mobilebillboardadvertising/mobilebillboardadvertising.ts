import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-mobilebillboardadvertising',
  imports: [CommonModule,OutdoorHeroSection,CardModule,DialogModule,ButtonModule, Quotes],
  templateUrl: './mobilebillboardadvertising.html',
  styleUrl: './mobilebillboardadvertising.scss'
})
export class Mobilebillboardadvertising {
  testimonials = [
  { text: "Drive Your Message Home with Pencil Peel IMT's Mobile Billboard Advertising" },
  { text: "Reach New Heights with Pencil Peel IMT's Dynamic Mobile Billboards" },
  { text: "Take Your Brand on the Go with Pencil Peel IMT's Mobile Advertising Solutions" },
  { text: "Move Your Message Forward with Pencil Peel IMT's Innovative Mobile Billboards" }
];

  mobileBillboardsHeroConfig: HeroConfig = {
  badgeText: '#1 Mobile Billboard Solutions',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Mobile Billboards',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective Mobile Billboards Advertising Campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Advertising That Moves'
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

 benefits= [
    {
      title: 'High Visibility',
      description:
        'We will help you create eye-catching mobile billboards that capture attention in crowded areas.',
      icon: 'fa-solid fa-eye',
    },
    {
      title: 'Targeted Reach',
      description:
        'Our team will help you route vehicles through specific locations where your target audience is concentrated.',
      icon: 'fa-solid fa-location-dot',
    },
    {
      title: 'Flexibility',
      description:
        'We will help you adjust routes and schedules in real-time to maximize exposure.',
      icon: 'fa-solid fa-arrows-rotate',
    },
    {
      title: 'Cost-Effective',
      description:
        'Our team will help you reach a large audience at a relatively low cost.',
      icon: 'fa-solid fa-wallet',
    },
    {
      title: 'Memorable Impact',
      description:
        'We will create mobile billboards that stand out and create a lasting impression.',
      icon: 'fa-solid fa-star',
    },
    {
      title: 'Dynamic Campaigns',
      description:
        'Our team will help you display video content, animations, or multiple messages.',
      icon: 'fa-solid fa-film',
    },
    {
      title: 'Increased Reach',
      description:
        'We will help you reach diverse demographics through mobile billboards.',
      icon: 'fa-solid fa-globe',
    },
    {
      title: 'Event Alignment',
      description:
        'Our team will deploy mobile billboards at events, concerts, or festivals.',
      icon: 'fa-solid fa-calendar-days',
    },
    {
      title: 'Brand Innovation',
      description:
        'We will help you convey a sense of creativity and modernity.',
      icon: 'fa-solid fa-bolt',
    },
    {
      title: 'Non-Traditional Locations',
      description:
        'Our team will place mobile billboards in areas where traditional ads can’t.',
      icon: 'fa-solid fa-compass',
    },
    {
      title: 'Measurable Results',
      description:
        'We will track campaign performance using GPS and tracking tools.',
      icon: 'fa-solid fa-chart-line',
    },
    {
      title: 'Eco-Friendly Options',
      description:
        'We will help you choose sustainable options for mobile billboards.',
      icon: 'fa-solid fa-leaf',
    },
  ];

  items = [
    {
      title: 'Vehicles',
      description:
        "We will use trucks, vans, or trailers equipped with large, eye-catching displays.",
      icon: 'fa-solid fa-truck',
    },
    {
      title: 'Displays',
      description:
        "Our team will design and install displays that showcase your brand's message.",
      icon: 'fa-solid fa-tv',
    },
    {
      title: 'Route Planning',
      description:
        'We will plan routes that maximize exposure and reach your target audience.',
      icon: 'fa-solid fa-road',
    },
    {
      title: 'Real-Time Tracking',
      description:
        'Our team will track campaign performance using GPS and tracking tools.',
      icon: 'fa-solid fa-location-crosshairs',
    },
    {
      title: 'Content Creation',
      description:
        'We will create engaging content that captures attention and drives results.',
      icon: 'fa-solid fa-pen-nib',
    },
    {
      title: 'Design and Installation',
      description:
        'Our team will design and install mobile billboards that are visually appealing and effective.',
      icon: 'fa-solid fa-paint-roller',
    },
    {
      title: 'Campaign Strategy',
      description:
        'We will develop a campaign strategy that meets your business goals and objectives.',
      icon: 'fa-solid fa-bullseye',
    },
    {
      title: 'Target Audience Identification',
      description:
        'Our team will help you identify and target your desired audience.',
      icon: 'fa-solid fa-users',
    },
    {
      title: 'Budget Planning',
      description:
        'We will help you plan and manage your budget for mobile billboards advertising.',
      icon: 'fa-solid fa-coins',
    },
    {
      title: 'Campaign Optimization',
      description:
        'Our team will optimize your campaign for better performance and results.',
      icon: 'fa-solid fa-chart-line',
    },
    {
      title: 'Digital Displays',
      description:
        'We will use digital displays that can show multiple messages and images.',
      icon: 'fa-solid fa-display',
    },
    {
      title: 'Illuminated Displays',
      description:
        'Our team will use illuminated displays that can be seen at night or in low-light areas.',
      icon: 'fa-solid fa-lightbulb',
    },
    {
      title: 'Interactive Displays',
      description:
        'We will create interactive displays that engage with your target audience.',
      icon: 'fa-solid fa-hand-pointer',
    },
    {
      title: 'Data Analysis',
      description:
        'Our team will analyse data to measure the effectiveness of your campaign.',
      icon: 'fa-solid fa-database',
    },
  ];

  
}
