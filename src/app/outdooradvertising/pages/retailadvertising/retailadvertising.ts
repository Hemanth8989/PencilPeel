import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-retailadvertising',
  imports: [CommonModule, OutdoorHeroSection, CardModule, ButtonModule, AccordionModule,AvatarModule, Quotes],
  templateUrl: './retailadvertising.html',
  styleUrl: './retailadvertising.scss'
})
export class Retailadvertising {
  testimonials = [
  { text: "Drive Sales and Foot Traffic with Pencil Peel IMT's Retail Advertising Solutions" },
  { text: "Elevate Your Retail Business with Pencil Peel IMT's Effective Advertising" },
  { text: "Reach Your Customers Wherever They Are with Pencil Peel IMT's Retail Ads" },
  { text: "Maximize Your Retail Potential with Pencil Peel IMT's Expert Advertising Services" }
];

  retailAdvertisingHeroConfig: HeroConfig = {
  badgeText: '#1 Retail Advertising Solutions',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Retail Advertising',
      'Solutions'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective retail advertising campaigns that drive business growth and increase brand visibility.',
  backgroundImage: 'https://images.pexels.com/photos/1010496/pexels-photo-1010496.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Drive Retail Success'
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

advertisingTypes = [
    {
      title: 'Print Advertising',
      description:
        'Our team will create effective print ads for flyers, brochures, catalogues, newspaper ads, and magazine inserts.',
      icon: 'pi pi-file'
    },
    {
      title: 'Digital Advertising',
      description:
        'We will help you create engaging digital ads for social media, Google Ads, email marketing, and website banners.',
      icon: 'pi pi-desktop'
    },
    {
      title: 'Broadcast Advertising',
      description:
        'Our team will create effective television and radio commercials tailored to local or national audiences.',
      icon: 'pi pi-video'
    },
    {
      title: 'Out-of-Home (OOH) Advertising',
      description:
        'We will help you create eye-catching billboards, bus wraps, posters, and digital screens in high-traffic areas.',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'In-Store Advertising',
      description:
        'Our team will design effective in-store displays, signage, point-of-sale (POS) ads, and digital kiosks.',
      icon: 'pi pi-shopping-cart'
    },
    {
      title: 'Direct Mail',
      description:
        'We will help you create targeted direct mail campaigns, including postcards, coupons, and promotional materials.',
      icon: 'pi pi-envelope'
    },
    {
      title: 'Event Sponsorship',
      description:
        'Our team will partner with local events or community initiatives to showcase your brand.',
      icon: 'pi pi-calendar'
    },
  ];

  retailExecutionSteps = [
    {
      icon: 'fas fa-users', 
      title: 'Identify Your Target Audience',
      description: "Understand your customers’ demographics, preferences, and shopping behaviors."
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Set Clear Objectives',
      description: "Define goals like increasing foot traffic, boosting sales, or building brand awareness."
    },
    {
      icon: 'fas fa-broadcast-tower',
      title: 'Choose the Right Channels',
      description: "Select platforms that align with your audience and business type."
    },
    {
      icon: 'fas fa-pencil-ruler',
      title: 'Create Compelling Content',
      description: "Design visuals and craft persuasive messages that resonate with your audience."
    },
    {
      icon: 'fas fa-cogs',
      title: 'Leverage Technology',
      description: "Use digital tools to track performance and adjust strategies in real time."
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Optimize for Local Searches',
      description: "Register on Google My Business and use location-based keywords to attract nearby customers."
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Use Seasonal Campaigns',
      description: "Plan campaigns around holidays, back-to-school seasons, or major sales events."
    },
    {
      icon: 'fas fa-gift',
      title: 'Offer Incentives',
      description: "Create coupons, discounts, or loyalty program rewards to motivate purchases."
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Track and Measure Results',
      description: "Use ROI analysis, A/B testing, and customer feedback to evaluate effectiveness."
    }
  ];

   retailAdvertisingBenefits = [
    { icon: 'fas fa-store', title: 'Increased Foot Traffic', description: 'Drive more customers to your physical stores or online platforms.' },
    { icon: 'fas fa-bullhorn', title: 'Brand Awareness', description: 'Keep your business top-of-mind among potential customers.' },
    { icon: 'fas fa-person-rays', title: 'Targeted Marketing', description: 'Focus on specific customer groups for more efficient campaigns.' },
    { icon: 'fas fa-chart-line', title: 'Boosts Sales', description: 'Create promotional campaigns that encourage shoppers to buy.' },
    { icon: 'fas fa-box-open', title: 'Supports New Product Launches', description: 'Introduce new products and showcase their benefits.' },
    { icon: 'fas fa-handshake', title: 'Customer Retention', description: 'Create loyalty programs and email promotions to keep customers engaged.' },
    { icon: 'fas fa-map-marker-alt', title: 'Local Market Penetration', description: 'Establish a strong presence in your community.' },
    { icon: 'fas fa-award', title: 'Increased Competitive Edge', description: 'Differentiate your store from competitors.' },
    { icon: 'fas fa-network-wired', title: 'Multi-Channel Reach', description: 'Engage customers across online and offline channels.' },
    { icon: 'fas fa-chart-pie', title: 'Measurable Impact', description: 'Provide analytics to assess performance and refine strategies.' },
    { icon: 'fas fa-globe', title: 'Increased Website Traffic', description: 'Drive more visitors to your website.' },
    { icon: 'fas fa-comments', title: 'Improved Customer Engagement', description: 'Create content that resonates with your audience.' },
    { icon: 'fas fa-star', title: 'Enhanced Brand Reputation', description: 'Build a strong brand reputation.' },
    { icon: 'fas fa-lightbulb', title: 'Better Customer Insights', description: 'Gain valuable insights into customer behavior and preferences.' },
    { icon: 'fas fa-shopping-cart', title: 'Increased Sales Conversions', description: 'Convert more leads into sales.' },
  ];

  retailAdvertisingImportance = [
    { icon: 'fas fa-chart-line', title: 'Drives Business Growth', description: 'Retail advertising is essential for driving business growth.' },
    { icon: 'fas fa-dollar-sign', title: 'Increases Revenue', description: 'Our team helps you increase revenue through effective advertising campaigns.' },
    { icon: 'fas fa-bullhorn', title: 'Builds Brand Awareness', description: 'Retail advertising helps establish a strong brand identity.' },
    { icon: 'fas fa-bullseye', title: 'Supports Business Objectives', description: 'We help you achieve your goals through targeted advertising campaigns.' },
  ];

  industries = [
    {
      icon: 'fas fa-tshirt',
      title: 'Fashion and Apparel',
      description: 'Promote products to style-conscious customers and trendsetters.'
    },
    {
      icon: 'fas fa-laptop',
      title: 'Electronics and Gadgets',
      description: 'Reach tech-savvy audiences with targeted campaigns.'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Food and Beverage',
      description: 'Promote products to customers looking for delicious options.'
    },
    {
      icon: 'fas fa-couch',
      title: 'Home Decor and Furniture',
      description: 'Reach customers looking for home improvement and furniture solutions.'
    },
    {
      icon: 'fas fa-spa',
      title: 'Beauty and Wellness',
      description: 'Promote products and services in the wellness and beauty sector.'
    }
  ];

  retailCampaignSteps = [
    {
      icon: 'fas fa-cogs',
      title: 'Develop a Customized Strategy',
      description: 'We develop a strategy tailored to your business needs and objectives.',
      color: 'linear-gradient(135deg, #10b981, #3b82f6)' // green → blue
    },
    {
      icon: 'fas fa-pencil-alt',
      title: 'Create Engaging Content',
      description: 'Our team designs content that resonates with your target audience.',
      color: 'linear-gradient(135deg, #f59e0b, #f97316)' // amber → orange
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Optimize Campaigns',
      description: 'We continuously optimize campaigns to ensure maximum ROI.',
      color: 'linear-gradient(135deg, #8b5cf6, #ec4899)' // purple → pink
    }
  ];

    activeAccordionValue: string | string[] | null = null;

  accordionItems = [
    { value: 1, icon: 'fas fa-bullseye', header: 'Consistency', content: 'Ensure branding and messaging are consistent across all channels, including print, digital, in-store, and social media.' },
    { value: 2, icon: 'fas fa-users', header: 'Customer-Centric Approach', content: 'Understand customer demographics and preferences, create targeted campaigns, and provide personalized experiences.' },
    { value: 3, icon: 'fas fa-hand-pointer', header: 'Call-to-Action (CTA)', content: 'Include clear CTAs like "Visit Now", "Shop Online", and "Call Today" to drive engagement.' },
    { value: 4, header: 'Personalization', content: 'Use customer data to create tailored promotions, including segmented email campaigns, targeted social media ads, and personalized offers.', icon: 'fas fa-user-edit' },
    { value: 5, header: 'Budget Allocation', content: 'Prioritize spending on channels with the highest ROI: digital advertising, social media advertising, and in-store promotions.', icon: 'fas fa-wallet' },
    { value: 6, header: 'Multi-Channel Approach', content: 'Engage customers across online and offline channels, including social media for a holistic experience.', icon: 'fas fa-network-wired' },
    { value: 7, header: 'Tracking and Measurement', content: 'Use ROI analysis, A/B testing, and customer feedback to evaluate campaign effectiveness and refine strategies.', icon: 'fas fa-chart-line' },
    { value: 8, header: 'Seasonal Campaigns', content: 'Plan campaigns around holidays, back-to-school seasons, and major sales events to maximize impact.', icon: 'fas fa-calendar-alt' },
    { value: 9, header: 'Brand Storytelling', content: 'Create compelling brand stories that resonate with your target audience.', icon: 'fas fa-book-open' },
    { value: 10, header: 'Continuous Optimization', content: 'Continuously monitor and optimize campaigns to ensure maximum ROI and achieve business objectives.', icon: 'fas fa-sync-alt' }
  ];
}
