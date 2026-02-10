import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { GlassCta } from "../../../components/glass-cta/glass-cta";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-inflatable-advertising',
  imports: [CommonModule, CardModule, OutdoorHeroSection, Whycpencilpeel, GlassCta, Quotes],
  templateUrl: './inflatable-advertising.html',
  styleUrl: './inflatable-advertising.scss'
})
export class InflatableAdvertising {
  testimonials = [
  { text: "Inflate Your Brand's Visibility with Pencil Peel IMT's Creative Inflatable Advertising" },
  { text: "Stand Out with Pencil Peel IMT's Eye-Catching Inflatable Solutions" },
  { text: "Reach New Heights with Pencil Peel IMT's Innovative Inflatable Advertising Campaigns" },
  { text: "Make a Big Impact with Pencil Peel IMT's Giant Inflatable Advertising" }
];

  inflatableAdvertisingHeroConfig: HeroConfig = {
  badgeText: '#1 Inflatable Advertising Specialists',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Inflatable',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective Inflatable Advertising Campaigns that drive business growth and product awareness.',
  backgroundImage: 'outdoor/inflatable/inflatable.png',
  typingTexts: [
    'Eye-Catching Brand Visibility'
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

 inflatableTypes = [
    {
      title: 'Giant Product Replicas',
      description: 'Our team will create inflatable replicas of your products.',
      image: 'outdoor/inflatable/replica.png',
    },
    {
      title: 'Inflatable Arches',
      description: 'We will design and install inflatable arches for event entrances or races.',
      image: 'outdoor/inflatable/arch.png',
    },
    {
      title: 'Sky Dancers',
      description: 'Our team will create inflatables that capture attention and engage audiences.',
      image: 'outdoor/inflatable/skydancer.png',
    },
    {
      title: 'Branded Balloons',
      description: 'We will design and create branded balloons for your business.',
      image: 'outdoor/inflatable/balloon.png',
    },
  ];

  benefits = [
    {
      title: 'High Visibility',
      description: 'We will help you create eye-catching inflatables that are instantly noticeable.',
      icon: 'pi pi-eye',
    },
    {
      title: 'Unique and Memorable',
      description: 'Our team will create inflatables that leave a lasting impression on viewers.',
      icon: 'fa fa-star',
    },
    {
      title: 'Customizable Designs',
      description: 'We will tailor inflatables to mimic your product, mascot, or logo.',
      icon: 'pi pi-palette',
    },
    {
      title: 'Cost-Effective',
      description: 'Our team will help you achieve long-term value with reusable inflatables.',
      icon: 'fa fa-dollar-sign',
    },
    {
      title: 'Portable and Easy to Set Up',
      description: 'We will help you transport and set up inflatables quickly and easily.',
      icon: 'pi pi-truck',
    },
    {
      title: 'Versatile',
      description: 'Our team will help you use inflatables for a wide range of events and locations.',
      icon: 'fa fa-layer-group',
    },
    {
      title: 'Engaging and Fun',
      description: 'We will create inflatables that encourage interaction and enhance brand appeal.',
      icon: 'pi pi-smile',
    },
    {
      title: 'Durable and Weather-Resistant',
      description: 'Our team will ensure that inflatables are made from robust materials.',
      icon: 'fa fa-shield-halved',
    },
    {
      title: 'Attracts Foot Traffic',
      description: 'We will help you increase foot traffic around the display area.',
      icon: 'pi pi-users',
    },
    {
      title: 'Eco-Friendly Options',
      description: 'We will help you choose sustainable materials and energy-efficient blowers.',
      icon: 'fa fa-leaf',
    },
    {
      title: 'Promotes Social Sharing',
      description: 'We will create inflatables that encourage people to take pictures and share them on social media.',
      icon: 'pi pi-share-alt',
    },
    {
      title: 'Reusable for Multiple Campaigns',
      description: 'We will help you use inflatables repeatedly for various events.',
      icon: 'fa fa-repeat',
    }
  ];

   steps = [
    {
      title: 'Increasing Brand Awareness',
      icon: 'pi pi-megaphone',
      intro:
        'Our team will help you increase brand awareness through inflatable advertising by:',
      details: [
        'Creating Eye-Catching Inflatables: We will design and create inflatables that capture attention and stand out.',
        'Strategic Placement: Our team will place inflatables in high-traffic areas to maximize visibility and reach.',
      ],
    },
    {
      title: 'Driving Sales and Conversions',
      icon: 'pi pi-chart-line',
      intro:
        'We will help you drive sales and conversions through inflatable advertising by:',
      details: [
        'Creating Engaging Inflatables: Our team will design inflatables that encourage interaction and enhance brand appeal.',
        'Promoting Special Offers: We will help you promote special offers and discounts through inflatable advertising.',
      ],
    },
    {
      title: 'Building Brand Identity',
      icon: 'pi pi-palette',
      intro:
        'Our team will help you build brand identity through inflatable advertising by:',
      details: [
        'Customizable Designs: We will tailor inflatables to mimic your product, mascot, or logo.',
        'Consistent Branding: Our team will ensure consistent branding across all inflatable advertising campaigns.',
      ],
    },
    {
      title: 'Measuring Success',
      icon: 'pi pi-chart-bar',
      intro:
        'We will help you measure the success of your inflatable advertising campaigns by:',
      details: [
        'Tracking Foot Traffic: Our team will track foot traffic and engagement around the inflatable display area.',
        'Monitoring Social Media: We will monitor social media engagement and shares generated by the inflatable advertising campaign.',
      ],
    },
  ];

whyChooseInflatableAdvertising: any = {
  title: "Why Choose Pencil Peel IMT for Inflatable Advertising?",
  description: "At Pencil Peel IMT, we specialize in creating impactful inflatable advertising campaigns that attract attention and leave lasting impressions. Our team combines creativity and expertise to design solutions that align with your brand goals and deliver measurable success.",
  features: [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has years of experience in inflatable advertising, delivering campaigns that make brands stand out.',
      icon: 'pi-star',
      borderColor: 'yellow-500',
      iconBgColor: 'yellow-100',
      iconColor: 'yellow-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We tailor inflatable advertising strategies to fit the unique goals and needs of your business.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'Our campaigns have consistently helped businesses achieve success and maximize brand visibility through inflatable advertising.',
      icon: 'pi-chart-line',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    }
  ],
  footer: ""
};

industries = [
    {
      title: 'Retail',
      description:
        'Our team will help retailers promote their products and services through eye-catching inflatables.',
      icon: 'pi pi-shopping-bag',
    },
    {
      title: 'Food and Beverage',
      description:
        'We will help food and beverage companies create inflatables that showcase their products and services.',
      icon: 'fa fa-utensils',
    },
    {
      title: 'Entertainment',
      description:
        'Our team will help entertainment companies promote their events, shows, and attractions through inflatable advertising.',
      icon: 'pi pi-video',
    },
    {
      title: 'Automotive',
      description:
        'We will help automotive companies promote their vehicles and services through inflatable advertising.',
      icon: 'fa fa-car',
    },
    {
      title: 'Real Estate',
      description:
        'Our team will help real estate companies promote their properties and services through inflatable advertising.',
      icon: 'pi pi-home',
    },
    {
      title: 'Sports & Events',
      description:
        'We will help sports and event organizers create inflatables for races, fairs, and fan experiences.',
      icon: 'fa fa-trophy',
    },
  ];

  cta: any = {
    text: 'Ready to Elevate Your Brand with Inflatable Advertising?',
    description: 'By partnering with <span class="font-semibold text-blue-700">Pencil Peel IMT</span>, you can unlock the full potential of inflatable advertising and drive business growth. Contact us today to learn more about our inflatable advertising services.',
    buttonText: 'Get in Touch',
    buttonIcon: 'pi pi-arrow-right',
  }
}
