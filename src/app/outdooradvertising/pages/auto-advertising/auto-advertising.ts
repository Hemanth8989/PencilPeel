import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { CommonModule } from '@angular/common';
import { GlassCta } from "../../../components/glass-cta/glass-cta";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-auto-advertising',
  imports: [CommonModule, OutdoorHeroSection, Whycpencilpeel, GlassCta, Quotes],
  templateUrl: './auto-advertising.html',
  styleUrl: './auto-advertising.scss'
})
export class AutoAdvertising {
  testimonials = [
  { text: "Drive Your Message Home with Pencil Peel IMT's Auto Advertising Solutions" },
  { text: "Sound Off Success with Pencil Peel IMT's Audio Announcement Advertising" },
  { text: "Reach Your Audience on the Go with Pencil Peel IMT's Mobile Advertising Expertise" },
  { text: "Amplify Your Brand with Pencil Peel IMT's Innovative Auto Advertising" }
];

  autoAudioAdvertisingHeroConfig: HeroConfig = {
  badgeText: '#1 Auto Audio Advertising Solutions',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Auto Advertising with',
      'Audio Announcements:'
    ],
    suffix: 'Grow Your Business'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating innovative marketing strategies that drive results. One effective way we will promote your brand is through auto advertising with audio announcements.',
  backgroundImage: '/outdoor/auto/auto1.png',
  typingTexts: [
    'Captive Audience on the Move'
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

whyChooseAutoAdvertising: any = {
  title: "Why Choose Pencil Peel IMT for Auto Advertising with Audio Announcements?",
  description: "By partnering with Pencil Peel IMT for auto advertising with audio announcements, you can benefit from our expertise, customized solutions, and innovative approaches that ensure your brand reaches a wider audience effectively.",
  features: [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has extensive experience in creating effective auto advertising campaigns with impactful audio announcements.',
      icon: 'pi-star',
      borderColor: 'yellow-500',
      iconBgColor: 'yellow-100',
      iconColor: 'yellow-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We work closely with you to understand your brand goals and develop personalized auto advertising strategies that suit your business needs.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Innovative Approach',
      description: 'Our team is committed to delivering innovative and effective audio announcement campaigns that capture attention and drive results.',
      icon: 'pi-lightbulb',
      borderColor: 'purple-500',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    }
  ],
  footer: ""
};

 brandPromotion = [
    {
      title: 'Increase Brand Visibility',
      description: 'Our auto advertising will increase visibility and reach a large audience, making your brand more recognizable and memorable.',
      icon: 'pi pi-eye',
    },
    {
      title: 'Build Brand Awareness',
      description: 'We will create a consistent brand message that resonates with your target audience and builds brand awareness.',
      icon: 'pi pi-megaphone',
    },
    {
      title: 'Drive Customer Engagement',
      description: 'Our audio announcements will create memorable experiences that drive customer engagement and loyalty.',
      icon: 'pi pi-users',
    },
  ];

  productPromotion = [
    {
      title: 'Create Awareness',
      description: 'We will create awareness about your products and services and generate interest among potential customers.',
      icon: 'pi pi-bell',
    },
    {
      title: 'Drive Sales',
      description: 'Our audio announcements will drive sales and conversions by promoting special offers, discounts, or limited-time promotions.',
      icon: 'fa fa-dollar-sign',
    },
    {
      title: 'Increase Product Visibility',
      description: 'We will increase product visibility and reach a large audience, making your products more visible and attractive to potential customers.',
      icon: 'pi pi-eye',
    },
  ];

  benefits = [
    {
      title: 'Increased Visibility',
      description: 'Our auto advertising will increase visibility and reach a large audience.',
      icon: 'pi pi-eye',
    },
    {
      title: 'Targeted Marketing',
      description: 'We will target specific demographics and tailor our marketing strategy to their needs and preferences.',
      icon: 'pi pi-megaphone',
    },
    {
      title: 'Memorable Experiences',
      description: 'Our audio announcements will create memorable experiences that drive customer loyalty and retention.',
      icon: 'pi pi-star',
    },
  ];

  executionSteps = [
    {
      title: 'Customized Audio Announcements',
      description: 'We will create customized audio announcements that showcase your brand\'s message and values.',
      icon: 'fa fa-music',
    },
    {
      title: 'Vehicle Selection',
      description: 'We will select vehicles that are suitable for your target audience and marketing goals.',
      icon: 'fa fa-car',
    },
    {
      title: 'Route Planning',
      description: 'We will plan routes that maximize visibility and reach a large audience.',
      icon: 'fa fa-map-marked-alt',
    },
    {
      title: 'Audio Quality',
      description: 'We will ensure that the audio quality is high and clear, and that the announcements are engaging and effective.',
      icon: 'fa fa-volume-up',
    },
  ];

  cta = {
    text: 'Get Started with Auto Advertising',
    description: 'Let us help you reach a large audience and promote your brand through auto advertising with audio announcements. Contact us Today to learn more about how Pencil Peel IMT can help your business thrive.',
  };

}
