import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-scrollbillboardadvertising',
  imports: [CommonModule,OutdoorHeroSection,CardModule, Quotes],
  templateUrl: './scrollbillboardadvertising.html',
  styleUrl: './scrollbillboardadvertising.scss'
})
export class Scrollbillboardadvertising {
  scrollingBillboardsHeroConfig: HeroConfig = {
  badgeText: '#1 Scrolling Billboard Solutions',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Scrolling Billboards',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel</strong>, we specialize in creating effective Scrolling Billboards Advertising Campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Dynamic Multi-Message Display'
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
  { text: "Scroll to Success with Pencil Peel IMT's Dynamic Scrolling Billboards" },
  { text: "Elevate Your Brand with Pencil Peel IMT's Innovative Scrolling Billboard Solutions" },
  { text: "Reach New Heights with Pencil Peel IMT's Engaging Scrolling Billboards" },
  { text: "Maximize Your Ad Impact with Pencil Peel IMT's Cutting-Edge Scrolling Billboards" }
];

scrollingBillboardBenefits = [
    { title: 'Maximizes Advertising Space', description: 'We will help you maximize advertising space by allowing multiple ads to rotate within a single frame.', icon: 'pi pi-th-large' },
    { title: 'Increased Engagement', description: 'Our team will create scrolling billboards that catch people\'s attention and increase engagement.', icon: 'pi pi-users' },
    { title: 'Cost-Effective for Advertisers', description: 'We help advertisers share the cost of the billboard with others, making it an affordable option.', icon: 'pi pi-wallet' },
    { title: 'Dynamic Content Display', description: 'We create dynamic content displays that tell a story or convey multiple aspects of a product or campaign.', icon: 'pi pi-play' },
    { title: 'High Visibility in Key Locations', description: 'We will help you place scrolling billboards in high-traffic areas to reach a large and diverse audience.', icon: 'pi pi-map-marker' },
    { title: 'Customizable Time Slots', description: 'We help advertisers choose specific times for their ads to appear.', icon: 'pi pi-clock' },
    { title: 'Attracts Attention', description: 'We create scrolling billboards that naturally draw the eye.', icon: 'pi pi-eye' },
    { title: 'Low Maintenance', description: 'We ensure that scrolling mechanisms are durable and require minimal upkeep.', icon: 'pi pi-cog' },
    { title: 'Eco-Friendly', description: 'We reduce waste and environmental impact by using digital or mechanically scrolling billboards.', icon: 'fa fa-leaf' },
    { title: 'Versatility', description: 'We help you use scrolling billboards in both indoor and outdoor environments.', icon: 'pi pi-sitemap' },
    { title: 'Supports Multiple Advertisers', description: 'We help multiple brands or campaigns use the same billboard.', icon: 'pi pi-users' },
    { title: 'Reduces Visual Clutter', description: 'We consolidate multiple ads into one location.', icon: 'pi pi-th-large' },
    { title: 'Real-Time Content Updates', description: 'We help you update content in real-time without physical intervention.', icon: 'pi pi-refresh' },
    { title: 'Builds Anticipation', description: 'We create scrolling billboards that foster increased engagement.', icon: 'pi pi-bolt' },
    { title: 'Drives Impulse Actions', description: 'We create scrolling billboards that encourage on-the-spot decisions.', icon: 'pi pi-shopping-cart' },
  ];

  scrollingBillboardIndustries = [
    { name: 'Retail', description: 'Our team will help retailers promote products and services to a large audience.', icon: 'pi pi-shopping-cart', bgColor: 'bg-blue-500' },
    { name: 'Hospitality', description: 'We will help hospitality businesses increase visibility and attract customers.', icon: 'fa fa-bed', bgColor: 'bg-teal-500' },
    { name: 'Entertainment', description: 'Our team will help entertainment companies promote movies, shows, or events.', icon: 'pi pi-video', bgColor: 'bg-orange-500' },
    { name: 'Automotive', description: 'We will help automotive companies showcase their products and services.', icon: 'pi pi-car', bgColor: 'bg-green-500' },
  ];

  scrollingCampaignSteps = [
    { 
      title: 'Develop a Customized Strategy', 
      description: 'We will develop a customized strategy that meets your business needs.', 
      icon: 'pi pi-cog', 
      bgColor: 'bg-blue-500' 
    },
    { 
      title: 'Create Engaging Content', 
      description: 'Our team will create engaging content that resonates with your target audience.', 
      icon: 'pi pi-pencil', 
      bgColor: 'bg-teal-500' 
    },
    { 
      title: 'Optimize Campaigns', 
      description: 'We will optimize campaigns to ensure maximum ROI.', 
      icon: 'pi pi-chart-line', 
      bgColor: 'bg-orange-500' 
    },
  ];
}
