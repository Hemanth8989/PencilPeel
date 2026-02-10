import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { GlassCta } from "../../../components/glass-cta/glass-cta";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-gymadvertising',
  imports: [CommonModule, OutdoorHeroSection, ButtonModule, GlassCta, Quotes],
  templateUrl: './gymadvertising.html',
  styleUrl: './gymadvertising.scss'
})
export class Gymadvertising {
  testimonials = [
  { text: "Pump Up Your Brand with Pencil Peel IMT's Gym Advertising Solutions" },
  { text: "Get Fit for Success with Pencil Peel IMT's Effective Gym Ads" },
  { text: "Sweat Out the Competition with Pencil Peel IMT's Gym Advertising" },
  { text: "Flex Your Marketing Muscle with Pencil Peel IMT's Gym Advertising Expertise" }
];

  gymAdvertisingHeroConfig: HeroConfig = {
    badgeText: '#1 Gym Advertising Specialists',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: 'Unlock your',
      highlighted: [
        'Product Potential with',
        'Gym Advertising'
      ],
      suffix: 'at Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective gym advertising campaigns that drive business growth and product awareness.',
    backgroundImage: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Target Health-Conscious Consumers'
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

  benefits: any[] = [
    { title: 'Targeted Audience', description: 'We will target health-conscious and motivated individuals.', icon: 'fas fa-bullseye' },
    { title: 'High Engagement', description: 'Gym advertising provides undistracted exposure to ads.', icon: 'fas fa-heart' },
    { title: 'Local Reach', description: 'Our team will help you target nearby customers effectively.', icon: 'fas fa-map-marker-alt' },
    { title: 'Credibility Boost', description: "Being associated with a reputable gym can enhance your brand's credibility.", icon: 'fas fa-check-circle' },
    { title: 'Increased Brand Awareness', description: 'Repeated exposure to your ads creates a lasting impression.', icon: 'fas fa-bell' },
    { title: 'Product Alignment', description: 'Gym advertising ensures a relevant audience is exposed to your offerings.', icon: 'fas fa-sync-alt' },
    { title: 'Cross-Promotion Opportunities', description: 'Partnering with gyms opens doors for future collaborations.', icon: 'fas fa-users' },
    { title: 'Immediate Interaction', description: 'Live promotions or sampling allow potential customers to try your product immediately.', icon: 'fas fa-play-circle' },
    { title: 'Community Building', description: 'Hosting events or workshops fosters a sense of community.', icon: 'fas fa-globe' },
    { title: 'Versatility', description: 'Gym advertising can be customized to fit different budgets and promotional goals.', icon: 'fas fa-cogs' }
  ];

  steps = [
    {
      title: 'Develop a Customized Strategy',
      description: 'We will develop a customized strategy that meets your business needs and goals.',
      icon: 'fas fa-lightbulb',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      title: 'Create Engaging Content',
      description: 'Our team will create engaging content that resonates with your target audience.',
      icon: 'fas fa-pencil-alt',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Optimize Campaigns',
      description: 'We will optimize campaigns to ensure maximum ROI and achieve your business objectives.',
      icon: 'fas fa-chart-line',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  industries = [
    {
      name: 'Fitness and Wellness',
      description: 'Our team will help fitness and wellness businesses promote their products and services, such as personal training, yoga classes, or fitness studios.',
      icon: 'fas fa-dumbbell',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      name: 'Health Food and Supplements',
      description: 'We will help health food and supplement businesses reach health-conscious individuals, promoting products like protein powder, vitamins, or healthy snacks.',
      icon: 'fas fa-apple-alt',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Fitness Apparel and Equipment',
      description: 'Our team will help fitness apparel and equipment businesses promote their products, such as athletic wear, fitness trackers, or exercise equipment.',
      icon: 'fas fa-tshirt',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      name: 'Sports and Recreation',
      description: 'We will help sports and recreation businesses promote their services, such as sports teams, recreational leagues, or outdoor activities.',
      icon: 'fas fa-football-ball',
      gradient: 'from-yellow-400 to-red-400'
    },
    {
      name: 'Wellness and Spa Services',
      description: 'Our team will help wellness and spa services businesses promote their services, such as massages, facials, or meditation classes.',
      icon: 'fas fa-spa',
      gradient: 'from-pink-400 to-purple-500'
    }
  ];

  whyBenefits = [
    { title: 'Targeted Audience', description: 'Gym advertising allows these industries to reach a targeted audience of health-conscious individuals.' },
    { title: 'Relevant Products', description: 'These industries offer products and services that are relevant to the gym-going audience.' },
    { title: 'Increased Visibility', description: 'Gym advertising increases visibility and reach for these industries.' }
  ];

  dynamicSections = [
    {
      heading: `Who Will See Your Ad with Pencil Peel IMT?`,
      subheading: "Targeted audience for maximum impact",
      points: [
        { title: "Fitness Enthusiasts", description: "Reach regular gym-goers passionate about fitness and wellness.", icon: "fas fa-dumbbell" },
        { title: "Health-Conscious Individuals", description: "Connect with people who prioritize their health and well-being.", icon: "fas fa-heartbeat" },
        { title: "Active Professionals", description: "Target busy professionals who use the gym to stay active and relieve stress.", icon: "fas fa-briefcase" },
        { title: "Students and Young Adults", description: "Reach students and young adults interested in fitness and wellness products.", icon: "fas fa-user-graduate" }
      ]
    },
    {
      heading: "Characteristics of Gym-Goers We Will Target",
      subheading: "Understand your audience better",
      points: [
        { title: "Health-Oriented", description: "Ads resonate with individuals who prioritize health and well-being.", icon: "fas fa-leaf" },
        { title: "Active", description: "Reach individuals regularly engaged in physical activity and fitness routines.", icon: "fas fa-running" },
        { title: "Influenced by Word-of-Mouth", description: "Encourage recommendations and brand loyalty.", icon: "fas fa-comments" },
        { title: "Loyal", description: "Engage gym members loyal to their gyms and open to related brands.", icon: "fas fa-star" }
      ]
    },
    {
      heading: "How Pencil Peel IMT Can Help",
      subheading: "Customized solutions for your business",
      points: [
        { title: "Develop a Customized Strategy", description: "We create strategies that meet your business goals.", icon: "fas fa-lightbulb" },
        { title: "Create Engaging Content", description: "Content designed to resonate with your target audience.", icon: "fas fa-pencil-alt" },
        { title: "Optimize Campaigns", description: "Ensure maximum ROI and achieve business objectives.", icon: "fas fa-chart-line" },
        { title: "Unlock Your Potential", description: "Partner with Pencil Peel IMT to drive growth through gym advertising.", icon: "fas fa-unlock" }
      ]
    },
    {
      heading: "How Pencil Peel IMT Can Help You Grow",
      subheading: "Customized solutions for your business",
      points: [
        { title: "Increase Brand Awareness", description: "We will increase brand awareness through gym advertising.", icon: "fas fa-bell" },
        { title: "Drive Sales", description: "Our team will help you drive sales with effective gym advertising campaigns.", icon: "fas fa-shopping-cart" },
        { title: "Enhance Customer Engagement", description: "We will create ads that engage customers and foster loyalty.", icon: "fas fa-users" }
      ]
    }

  ];

  cta = {
    text: `Ready to Elevate Your Brand with <span class="text-orange-600"> Gym Advertising</span>?`,
    description: "By partnering with Pencil Peel IMT, you can unlock the full potential of gym advertising and drive business growth. Contact us Today, to learn more about our gym advertising services."
  }


}
