import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-interactive-display-advertising',
  imports: [CommonModule, Benefitsnew, Whycpencilpeel, OutdoorHeroSection, Quotes],
  templateUrl: './interactive-display-advertising.html',
  styleUrl: './interactive-display-advertising.scss'
})
export class InteractiveDisplayAdvertising {
  testimonials = [
  { text: "Engage, Interact, Convert with Pencil Peel IMT's Interactive Display Advertising" },
  { text: "Bring Your Brand to Life with Pencil Peel IMT's Immersive Interactive Displays" },
  { text: "Interact, Explore, Remember with Pencil Peel IMT's Innovative Display Solutions" },
  { text: "Transform Your Audience with Pencil Peel IMT's Interactive Display Expertise" }
];

  interactiveDisplayHeroConfig: HeroConfig = {
    badgeText: '#1 Interactive Display Solutions',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: '',
      highlighted: [
        'Interactive Displays',
        'Advertising'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we offer innovative interactive displays advertising solutions that engage audiences and drive results for our clients.',
    backgroundImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Engage & Convert'
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

  benefitsInteractiveDisplay: any = {
    title: `Benefits of <span class="text-orange-500">Interactive Display Advertising</span>`,
    description: `At <span class="text-orange-500">Pencil Peel IMT</span>, our team will help you unlock the full potential of interactive display advertising. Here are some benefits:`,
    benefits: [
      {
        icon: 'pi-users',
        gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
        title: 'Engagement',
        description: 'Create interactive displays that encourage users to engage with the content, increasing dwell time and brand recall.'
      },
      {
        icon: 'pi-image',
        gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
        title: 'Immersive Experience',
        description: 'Design immersive experiences that allow users to explore products or services in a more interactive way.'
      },
      {
        icon: 'pi-database',
        gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
        title: 'Data Collection',
        description: 'Collect data on user interactions, providing valuable insights for brands.'
      },
      {
        icon: 'pi-shopping-cart',
        gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
        title: 'Increased Conversions',
        description: 'Create interactive displays that drive conversions, such as sales, leads, or sign-ups.'
      },
      {
        icon: 'pi-megaphone',
        gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
        title: 'Brand Awareness',
        description: 'Increase brand awareness through interactive displays that showcase your brand\'s personality and values.'
      },
      {
        icon: 'pi-chart-bar',
        gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
        title: 'Customer Insights',
        description: 'Gain valuable insights into customer behaviour and preferences through interactive displays.'
      },
      {
        icon: 'pi-trophy',
        gradient: 'bg-gradient-to-tr from-amber-400 to-orange-500',
        title: 'Competitive Advantage',
        description: 'Create interactive displays that set you apart from your competitors.'
      },
      {
        icon: 'pi-chart-line',
        gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
        title: 'Measurable ROI',
        description: 'Track the effectiveness of your interactive display campaigns, providing measurable ROI.'
      }
    ]
  }
  whyChooseInteractiveDisplay: any = {
    title: "Why Choose Pencil Peel IMT for Interactive Display Advertising?",
    description: "At Pencil Peel IMT, our team of experts is dedicated to delivering innovative interactive display advertising solutions that drive results for our clients. Here's why you should partner with us:",
    features: [
      {
        id: 1,
        title: 'Creative Expertise',
        description: 'Our team of creatives develops engaging and interactive content that resonates with your target audience. We craft compelling stories, design stunning visuals, and create immersive experiences that capture attention and drive engagement.',
        icon: 'pi-lightbulb',
        borderColor: 'orange-500',
        iconBgColor: 'orange-100',
        iconColor: 'orange-600'
      },
      {
        id: 2,
        title: 'Technical Expertise',
        description: 'Our team of technicians designs and deploys interactive displays that are seamless, intuitive, and impactful. We leverage the latest technologies, including touchscreens, gesture recognition, and data analytics, to create innovative solutions that meet your business needs.',
        icon: 'pi-cog',
        borderColor: 'blue-500',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600'
      },
      {
        id: 3,
        title: 'Data-Driven Insights',
        description: 'We provide data-driven insights to help optimize campaigns and improve performance. Our team tracks user interactions, analyzes data, and provides actionable recommendations to ensure your interactive display advertising campaigns achieve their full potential.',
        icon: 'pi-chart-line',
        borderColor: 'green-500',
        iconBgColor: 'green-100',
        iconColor: 'green-600'
      }
    ],
    footer: ""
  };

  steps = [
    { title: 'Concept Development', description: 'Develop a concept for the interactive display campaign, aligning with client goals.', icon: 'pi-lightbulb' },
    { title: 'Content Creation', description: 'Create engaging and interactive content that resonates with the target audience.', icon: 'pi-pencil' },
    { title: 'Display Design', description: 'Design the interactive display considering UX and technical requirements.', icon: 'pi-desktop' },
    { title: 'Installation & Deployment', description: 'Install and deploy the interactive display ensuring seamless functionality.', icon: 'pi-cog' },
    { title: 'Campaign Optimization', description: 'Monitor and optimize the campaign using data and insights.', icon: 'pi-chart-line' },
    { title: 'Content Updates', description: 'Update content regularly to keep the campaign fresh and engaging.', icon: 'pi-refresh' },
    { title: 'Technical Support', description: 'Provide technical support to ensure the display functions correctly.', icon: 'pi-wrench' },
    { title: 'Performance Analysis', description: 'Analyze campaign performance and provide insights for improvements.', icon: 'pi-search' },
    { title: 'Campaign Evaluation', description: 'Evaluate campaign success and its impact on business objectives.', icon: 'pi-check' },
    { title: 'Future Planning', description: 'Plan future campaigns leveraging insights and best practices.', icon: 'pi-calendar' }
  ];

  technologies = [
    { title: 'Touchscreens', description: 'Enable users to interact through touch for intuitive and engaging experiences.', icon: 'fa-solid fa-hand-pointer' },
    { title: 'Gesture Recognition', description: 'Allow users to interact through gestures, enhancing natural and intuitive interactions.', icon: 'fa-solid fa-hand-sparkles' },
    { title: 'Data Analytics', description: 'Track user interactions and provide actionable insights for brands.', icon: 'fa-solid fa-line-chart' },
    { title: 'VR & AR', description: 'Create immersive experiences that engage users and drive results.', icon: 'fa-solid fa-vr-cardboard' },
    { title: 'Interactive LED Displays', description: 'Dynamic displays for engaging visual experiences in various settings.', icon: 'fa-solid fa-tv' },
    { title: 'Projection Mapping', description: 'Project images and videos onto surfaces for immersive visual experiences.', icon: 'fa-solid fa-image' },
    { title: 'Artificial Intelligence (AI)', description: 'Analyze interactions and provide personalized experiences.', icon: 'fa-solid fa-robot' },
    { title: 'Internet of Things (IoT)', description: 'Connect devices to collect data and enable interactive experiences.', icon: 'fa-solid fa-plug' }
  ];

  adLocations = [
    {
      category: 'Public Spaces',
      icon: 'fa-solid fa-people-group',
      locations: [
        { title: 'Malls and Shopping Centres', description: 'Engage with shoppers and promote products, services, or events to drive foot traffic.' },
        { title: 'Airports and Train Stations', description: 'Engage travellers and commuters with promotions and valuable information.' },
        { title: 'Public Squares and Parks', description: 'Create immersive experiences and memorable interactions for your target audience.' }
      ]
    },
    {
      category: 'Retail Environments',
      icon: 'pi-shopping-cart',
      locations: [
        { title: 'Retail Stores', description: 'Create interactive experiences to promote products, provide information, and drive sales.' },
        { title: 'Supermarkets', description: 'Engage customers with product promotions, recipes, and special offers.' },
        { title: 'Department Stores', description: 'Provide interactive experiences to increase engagement and sales.' }
      ]
    },
    {
      category: 'Events and Exhibitions',
      icon: 'pi-calendar',
      locations: [
        { title: 'Trade Shows and Conferences', description: 'Promote products, services, and events while generating leads.' },
        { title: 'Product Launches', description: 'Create buzz and drive sales for new products using interactive displays.' },
        { title: 'Festivals and Events', description: 'Engage attendees and provide memorable experiences with your brand.' }
      ]
    },
    {
      category: 'Other Locations',
      icon: 'pi-map-marker',
      locations: [
        { title: 'Hotels and Resorts', description: 'Enhance guest experiences and promote amenities, services, and events.' },
        { title: 'Museums and Galleries', description: 'Create interactive exhibits to inform and engage visitors.' },
        { title: 'Stadiums and Arenas', description: 'Engage fans and spectators with interactive promotions and experiences.' }
      ]
    }
  ];
}
