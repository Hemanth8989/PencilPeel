import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { CommonModule } from '@angular/common';
import { GlassCta } from "../../../components/glass-cta/glass-cta";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-cutout-advertising',
  imports: [CommonModule, OutdoorHeroSection, Whycpencilpeel, GlassCta,Quotes],
  templateUrl: './cutout-advertising.html',
  styleUrl: './cutout-advertising.scss'
})
export class CutoutAdvertising {
  cutOutAdvertisingHeroConfig: HeroConfig = {
    badgeText: '#1 Cut-out Advertising Specialists',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: '',
      highlighted: [
        'Cut-out Advertising:',
        'A Powerful Way to Promote Your Brand'
      ],
      suffix: ''
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating innovative marketing strategies that drive results. One effective way we will promote your product, brand, or company is through cut-out advertising.',
    backgroundImage: '/outdoor/cutout/cutout1.png',
    typingTexts: [
      'Stand Out From the Crowd'
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


  whyChooseCutOutAdvertising: any = {
    title: "Why Choose Pencil Peel IMT for Cut-out Advertising?",
    description: "At Pencil Peel IMT, we are dedicated to delivering innovative and effective marketing solutions that drive results. Our team of experts will work closely with you to understand your brand goals and develop customized cut-out advertising strategies that meet your needs.",
    features: [
      {
        id: 1,
        title: 'Expertise',
        description: 'Our team has extensive experience in creating impactful cut-out advertising campaigns that drive results.',
        icon: 'pi-star',
        borderColor: 'yellow-500',
        iconBgColor: 'yellow-100',
        iconColor: 'yellow-600'
      },
      {
        id: 2,
        title: 'Customized Solutions',
        description: 'We collaborate with you to understand your unique brand goals and create tailored cut-out advertising strategies.',
        icon: 'pi-wrench',
        borderColor: 'green-500',
        iconBgColor: 'green-100',
        iconColor: 'green-600'
      },
      {
        id: 3,
        title: 'Innovative Approach',
        description: 'Our team delivers creative and effective cut-out advertising ideas designed to capture attention and engage audiences.',
        icon: 'pi-lightbulb',
        borderColor: 'purple-500',
        iconBgColor: 'purple-100',
        iconColor: 'purple-600'
      },
      {
        id: 4,
        title: 'Measurable Results',
        description: 'We continuously monitor and optimize your cut-out advertising campaigns to ensure maximum ROI.',
        icon: 'pi-chart-line',
        borderColor: 'blue-500',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600'
      }
    ],
    footer: ""
  };

  promotions = [
    {
      title: 'Increasing Brand Visibility',
      description: `Cut-out advertising is a great way to increase brand visibility and reach a large audience. Our team will place cut-outs in high-traffic areas to ensure maximum exposure for your brand.`,
      icon: 'pi pi-eye',
    },
    {
      title: 'Creating Brand Awareness',
      description: `Cut-out advertising can help create brand awareness and reinforce your brand message. Our team will design eye-catching cut-outs that showcase your brand's unique personality and style.`,
      icon: 'pi pi-megaphone',
    },
    {
      title: 'Driving Sales',
      description: `Cut-out advertising can also drive sales by promoting specific products or offers. Our team will work with you to create cut-outs that showcase your products or services in a compelling and attention-grabbing way.`,
      icon: 'fa fa-dollar-sign',
    },
  ];

  benefits = [
    {
      title: 'Increase Brand Visibility',
      description: 'Reach a large audience and increase brand awareness.',
      icon: 'pi pi-eye',
    },
    {
      title: 'Create Memorable Experiences',
      description: 'Create memorable experiences that drive customer loyalty and retention.',
      icon: 'pi pi-star',
    },
    {
      title: 'Drive Sales',
      description: 'Drive sales by promoting specific products or offers.',
      icon: 'fa fa-dollar-sign',
    },
    {
      title: 'Target Specific Demographics',
      description: 'Target specific demographics and tailor your marketing strategy to their needs and preferences.',
      icon: 'pi pi-users',
    },
  ];

  executionSteps = [
    {
      title: 'Design Eye-Catching Cut-outs',
      description: "Create eye-catching cut-outs that showcase your brand's unique personality and style.",
      icon: 'pi pi-pencil',
    },
    {
      title: 'Place Cut-outs in High-Traffic Areas',
      description: 'Place cut-outs in high-traffic areas to ensure maximum exposure for your brand.',
      icon: 'pi pi-map-marker',
    },
    {
      title: 'Monitor and Optimize',
      description: 'Monitor the performance of your cut-out advertising campaign and optimize it for better results.',
      icon: 'pi pi-chart-line',
    },
  ];

  effectivenessFactors = [
    {
      title: 'Eye-Catching',
      description: `Our team will design eye-catching cut-outs that grab the attention of potential customers and showcase your brand's unique personality and style. We will work closely with you to understand your brand goals and develop customized cut-out designs that meet your needs.`,
      icon: 'pi pi-eye',
    },
    {
      title: 'Memorable',
      description: `We will create memorable experiences that drive customer loyalty and retention. Our cut-outs will be designed to leave a lasting impression on your target audience, increasing brand recognition and recall.`,
      icon: 'pi pi-star',
    },
    {
      title: 'Flexibility',
      description: `Our team will place cut-outs in a variety of locations, including high-traffic areas and events, to ensure maximum exposure for your brand. We will work with you to identify the most effective locations for your cut-out advertising campaign.`,
      icon: 'pi pi-arrows-alt',
    },
  ];

  cta = {
    text: 'Ready to Elevate Your Brand with Cut-out Advertising?',
    description: `Let us help you unlock your brand's potential with our expert cut-out advertising services. Contact us Today to learn more about how <span class="font-bold text-green-500">Pencil Peel IMT</span> can help your business thrive.`,
  };

  testimonials = [
  { text: "Cut Out the Competition with Pencil Peel IMT's Eye-Catching Advertising Solutions" },
  { text: "Stand Out with Pencil Peel IMT's Innovative Cut-Out Advertising" },
  { text: "Make a Lasting Impression with Pencil Peel IMT's Cut-Out Advertising Expertise" },
  { text: "Elevate Your Brand with Pencil Peel IMT's Creative Cut-Out Solutions" }
];

}
