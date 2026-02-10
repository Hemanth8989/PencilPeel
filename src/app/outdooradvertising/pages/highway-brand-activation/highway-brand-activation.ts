import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-highway-brand-activation',
  imports: [CommonModule,Benefitsnew, Whycpencilpeel, OutdoorHeroSection, Quotes],
  templateUrl: './highway-brand-activation.html',
  styleUrl: './highway-brand-activation.scss'
})
export class HighwayBrandActivation {
  testimonials = [
  { text: "Accelerate Your Brand's Growth with Pencil Peel IMT's Highway Brand Activation" },
  { text: "Experience the Power of Brand Activation with Pencil Peel IMT" },
  { text: "Drive Engagement and Sales with Pencil Peel IMT's Strategic Brand Activation" },
  { text: "Bring Your Brand to Life with Pencil Peel IMT's Creative Activation Solutions" }
];

  highwayBrandActivationHeroConfig: HeroConfig = {
    badgeText: '#1 Brand Activation Leaders',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: '',
      highlighted: [
        'Highway Brand Activation:',
        'Unlocking Your Brand\'s Potential'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating impactful brand activation strategies that drive engagement, boost brand awareness, and foster customer loyalty. Highway brand activation refers to the process of promoting a brand through strategic marketing initiatives, often leveraging high-traffic areas or events to reach the target audience.',
    backgroundImage: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Unlock Your Brand\'s Potential'
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

  benefitsBrandActivation: any = {
    title: `Benefits of <span class="text-orange-500">Brand Activation</span>`,
    description: `By partnering with <span class="text-orange-500">Pencil Peel IMT</span> for brand activation, your business can:`,
    benefits: [
      {
        icon: 'pi-bullhorn',
        gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
        title: 'Increase Brand Awareness',
        description: 'Reach a wider audience and build brand recognition through strategic marketing initiatives.'
      },
      {
        icon: 'pi-users',
        gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
        title: 'Drive Customer Engagement',
        description: 'Create memorable experiences that foster customer loyalty and encourage brand advocacy.'
      },
      {
        icon: 'pi-chart-line',
        gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
        title: 'Boost Sales',
        description: 'Effective brand activation can lead to increased sales and revenue growth.'
      }
    ]
  }
  whyChooseBrandActivation: any = {
    title: "Why Choose Pencil Peel IMT for Brand Activation?",
    description: "By partnering with Pencil Peel IMT for brand activation, you can trust that our team will deliver innovative and effective marketing solutions that drive results. We will work closely with you to understand your brand goals and develop customized marketing strategies that meet your needs.",
    features: [
      {
        id: 1,
        title: 'Localized Marketing',
        description: 'We will tailor our marketing efforts to specific regions or areas where your target audience is most active.',
        icon: 'pi-map-marker',
        borderColor: 'orange-500',
        iconBgColor: 'orange-100',
        iconColor: 'orange-600'
      },
      {
        id: 2,
        title: 'Face-to-Face Interaction',
        description: 'Our team will prioritize direct, one-on-one interaction with customers to build relationships and gather feedback.',
        icon: 'pi-users',
        borderColor: 'green-500',
        iconBgColor: 'green-100',
        iconColor: 'green-600'
      },
      {
        id: 3,
        title: 'Event Marketing',
        description: 'We will plan and execute events that engage customers and create lasting impressions.',
        icon: 'pi-calendar',
        borderColor: 'blue-500',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600'
      }
    ],
    footer: ""
  };

  services = [{ title: 'Event Marketing', description: 'Plan and execute events, product launches, and activations that engage customers and create lasting impressions.', icon: 'pi-calendar' },
  { title: 'Experiential Marketing', description: 'Design immersive experiences that allow customers to interact with your brand in meaningful ways.', icon: 'pi-eye' },
  { title: 'Promotional Campaigns', description: 'Develop targeted campaigns to reach your audience and drive sales.', icon: 'pi-bullhorn' },
  { title: 'In-store Promotions', description: 'Create eye-catching in-store displays that drive sales and increase brand visibility.', icon: 'pi-shopping-cart' },
  { title: 'Sampling and Demo', description: 'Offer sampling and demo services for customers to experience your product or service first-hand.', icon: 'pi-box' },
  { title: 'Interactive Displays', description: 'Create interactive displays that engage customers and provide memorable experiences.', icon: 'pi-desktop' },
  { title: 'Social Media Activations', description: 'Develop social media activations that encourage engagement and drive brand awareness.', icon: 'pi-globe' },
  { title: 'Product Launches', description: 'Plan and execute product launches that generate buzz and excitement.', icon: 'pi-star' },
  { title: 'Brand Ambassador Programs', description: 'Develop programs that partner with influencers and advocates to promote your brand.', icon: 'pi-users' },
  { title: 'Experiential Events', description: 'Create pop-up shops, activations, and installations for meaningful brand interaction.', icon: 'pi-map-marker' }
  ];
}
