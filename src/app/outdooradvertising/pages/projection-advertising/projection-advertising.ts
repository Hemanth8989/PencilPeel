import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-projection-advertising',
  imports: [CommonModule, CardModule, OutdoorHeroSection,Quotes],
  templateUrl: './projection-advertising.html',
  styleUrl: './projection-advertising.scss'
})
export class ProjectionAdvertising {
  testimonials = [
  { text: "Project Your Brand to New Heights with Pencil Peel IMT's Innovative Solutions" },
  { text: "Illuminate Your Message with Pencil Peel IMT's Dynamic Projection Advertising" },
  { text: "Bring Your Brand to Life with Pencil Peel IMT's Captivating Projection Ads" },
  { text: "Project Success with Pencil Peel IMT's Creative and Impactful Advertising Solutions" }
];

  projectionAdvertisingHeroConfig: HeroConfig = {
    badgeText: '#1 Projection Advertising Specialists',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: 'Unlock Your',
      highlighted: [
        'Projection',
        'Advertising'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective projection advertising campaigns that drive business growth and product awareness.',
    backgroundImage: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Transform Any Surface'
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

  benefits = [
    { title: 'High Visual Impact', description: 'We will create dramatic and captivating projections that grab attention.', icon: 'pi pi-eye' },
    { title: 'Versatility', description: 'Our team will help you display projections on various surfaces, offering limitless creative possibilities.', icon: 'fa fa-expand' },
    { title: 'Dynamic and Customizable', description: 'We will tailor content to suit your brand, product, or event.', icon: 'pi pi-palette' },
    { title: 'Cost-Effective', description: 'Our team will help you reduce long-term costs by eliminating the need for physical materials.', icon: 'fa fa-dollar-sign' },
    { title: 'Eco-Friendly', description: 'We will help you choose sustainable options for projection advertising.', icon: 'fa fa-leaf' },
    { title: 'Interactivity', description: 'Our team will create interactive features that enable audience engagement.', icon: 'pi pi-share-alt' },
    { title: 'Wide Audience Reach', description: 'We will place projections in high-traffic areas to ensure maximum visibility.', icon: 'fa fa-users' },
    { title: 'Memorability', description: 'Our team will create projections that leave a lasting impression on audiences.', icon: 'pi pi-star' },
    { title: 'Scalable for Different Campaigns', description: 'We will help you use projections for small-scale or large-scale campaigns.', icon: 'fa fa-arrows-alt' },
    { title: 'Enhances Brand Perception', description: 'Our team will convey a sense of modernity and creativity through projection advertising.', icon: 'pi pi-lightbulb' },
    { title: 'Social Media Amplification', description: 'We will create eye-catching projections that encourage social media sharing.', icon: 'fa fa-share-alt' },
    { title: 'No Permanent Installation', description: 'Our team will ensure that projections leave no physical footprint.', icon: 'pi pi-times-circle' },
  ];

  services = [
    { title: 'Customized Projection Design', description: 'We will design and create customized projections that suit your brand, product, or event.', icon: 'pi pi-palette' },
    { title: 'Projection Mapping', description: 'Our team will map projections onto various surfaces, including buildings, walls, or other structures.', icon: 'fa fa-map' },
    { title: 'Dynamic Content Creation', description: 'We will create dynamic content, including images, videos, or animations, for projection advertising.', icon: 'pi pi-video' },
    { title: 'Interactive Projection Features', description: 'Our team will create interactive features that enable audience engagement.', icon: 'fa fa-hand-pointer' },
    { title: 'Projection Installation', description: 'We will install and set up projection equipment for events or campaigns.', icon: 'pi pi-cog' },
    { title: 'Content Updates', description: 'Our team will help you update content in real-time to suit your marketing needs.', icon: 'fa fa-sync' },
    { title: 'Campaign Strategy', description: 'We will develop a campaign strategy that meets your business goals and objectives.', icon: 'pi pi-chart-line' },
    { title: 'Measurement and Evaluation', description: 'Our team will track and measure the effectiveness of your projection advertising campaigns.', icon: 'fa fa-chart-bar' },
    { title: '3D Projection Mapping', description: 'We will create immersive 3D projection mapping experiences.', icon: 'pi pi-cube' },
    { title: 'Large-Scale Projections', description: 'Our team will create large-scale projections that grab attention.', icon: 'fa fa-expand-arrows-alt' },
    { title: 'Event Projections', description: 'We will provide projection advertising services for events, product launches, or grand openings.', icon: 'pi pi-calendar' },
  ];

  industries = [
    { title: 'Retail', description: 'Our team will help retailers promote their products and services through eye-catching projections.', icon: 'pi pi-shopping-bag' },
    { title: 'Entertainment', description: 'We will help entertainment companies promote their events, shows, and attractions through projection advertising.', icon: 'pi pi-video' },
    { title: 'Real Estate', description: 'Our team will help real estate companies promote their properties and services through projection advertising.', icon: 'pi pi-home' },
    { title: 'Automotive', description: 'We will help automotive companies promote their vehicles and services through projection advertising.', icon: 'fa fa-car' },
    { title: 'Food and Beverage', description: 'We will help food and beverage companies promote their products and services through projection advertising.', icon: 'fa fa-utensils' },
    { title: 'Technology', description: 'We will help tech companies promote their products and services through innovative projection advertising.', icon: 'pi pi-cog' },
    { title: 'Hospitality', description: 'We will help hospitality companies promote their events and services through projection advertising.', icon: 'fa fa-hotel' },
    { title: 'Events and Weddings', description: 'We will help event planners and wedding organizers create memorable experiences through projection advertising.', icon: 'pi pi-calendar' },
  ];

  helps = [
    {
      title: 'Build Brand Awareness',
      description: 'We will create large-scale, eye-catching displays that build brand awareness.',
      icon: 'pi pi-megaphone',
    },
    {
      title: 'Create Buzz',
      description: 'Our team will help you create buzz for product launches, grand openings, or special events.',
      icon: 'fa fa-bolt',
    },
    {
      title: 'Stand Out in Crowded Markets',
      description: 'We will help you offer an innovative and memorable experience that stands out in crowded markets.',
      icon: 'pi pi-star',
    },
  ];

   reasons = [
    {
      title: 'High Visibility',
      description: 'Projection advertising grabs attention and is hard to ignore. We will help you create eye-catching projections that capture your target audience and leave a lasting impression, increasing brand awareness and driving business growth.',
      icon: 'pi pi-eye',
    },
    {
      title: 'Customization',
      description: 'We can tailor projections to fit the specific needs of each industry. Our team will help you create projections that showcase your brand and messaging in an engaging and effective way.',
      icon: 'pi pi-palette',
    },
    {
      title: 'Flexibility',
      description: 'Projection advertising can be used for various events, product launches, or marketing campaigns. We will help you develop a projection advertising strategy that fits your unique goals and objectives.',
      icon: 'fa fa-arrows-alt',
    },
  ];

  keyPoints = [
    { title: 'Increase brand awareness and drive business growth', icon: 'pi pi-megaphone' },
    { title: 'Stand out in a crowded market and differentiate yourself from competitors', icon: 'fa fa-star' },
    { title: 'Create engaging and memorable advertising experiences', icon: 'fa fa-smile' },
    { title: 'Reach a wider audience and build a strong reputation', icon: 'fa fa-users' },
    { title: 'Achieve your marketing goals and drive business success', icon: 'pi pi-chart-line' },
  ];
}
