import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { CommonModule } from '@angular/common';
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-metrotrainadvertising',
  imports: [OutdoorHeroSection, Industrycards, CommonModule, Whycpencilpeel, Quotes],
  templateUrl: './metrotrainadvertising.html',
  styleUrl: './metrotrainadvertising.scss'
})
export class Metrotrainadvertising {
  metroTrainHeroConfig: HeroConfig = {
  badgeText: '#1 Metro Train Advertising',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock your',
    highlighted: [
      'Metro Train',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective metro train advertising campaigns that drive business growth and increase brand visibility.',
  backgroundImage: 'https://images.pexels.com/photos/2541249/pexels-photo-2541249.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Captive Commuter Audience'
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
  { text: "Ride to Success with Pencil Peel IMT's Metro Train Advertising" },
  { text: "Take Your Brand on a Journey with Pencil Peel IMT's Metro Ads" },
  { text: "Reach New Destinations with Pencil Peel IMT's Effective Metro Train Advertising" },
  { text: "Accelerate Your Brand's Visibility with Pencil Peel IMT's Metro Train Solutions" }
];

metroTrainAdvertisingData = {
  title: 'Industries that Can Benefit from Metro Train Advertising',
  description:
    'We will help various industries reach their target audience through metro train advertising, including:',
  industries: [
    {
      title: 'Retail',
      description:
        'Our team will help retail businesses promote their products and drive foot traffic to their stores.',
      image: '/industries/retail.webp'
    },
    {
      title: 'Technology',
      description:
        'We will help technology businesses promote their products or services.',
      image: '/industries/gadgets.webp'
    },
    {
      title: 'Travel and Hospitality',
      description:
        'Our team will help travel and hospitality businesses promote their destinations or services.',
      image: '/industries/tourism.webp'
    },
    {
      title: 'Real Estate',
      description:
        'We will help real estate businesses promote their properties or services.',
      image: '/industries/construction.webp'
    },
    {
      title: 'Entertainment',
      description:
        'Our team will help entertainment businesses promote their events or services.',
      image: '/industries/media.webp'
    },
    {
      title: 'Food and Beverage',
      description:
        'We will help restaurants, cafes, and food delivery services promote their products and services.',
      image: '/industries/food.webp'
    },
    {
      title: 'Automotive',
      description:
        'Our team will help automotive businesses promote their products or services.',
      image: '/industries/automotive.webp'
    },
    {
      title: 'Education',
      description:
        'We will help educational institutions promote their programs or services.',
      image: '/industries/education.webp'
    },
    {
      title: 'Healthcare',
      description:
        'Our team will help healthcare businesses promote their services or products.',
      image: '/industries/healthcare.webp'
    },
    {
      title: 'Fashion and Apparel',
      description:
        'We will help fashion and apparel businesses promote their products.',
      image: '/industries/fashion.webp'
    },
    {
      title: 'Sports and Fitness',
      description:
        'Our team will help sports and fitness businesses promote their services or products.',
      image: '/industries/sports.webp'
    },
    {
      title: 'Financial Services',
      description:
        'We will help financial services businesses promote their products or services.',
      image: '/industries/financial.webp'
    },
    {
      title: 'Beauty and Wellness',
      description:
        'We will help beauty and wellness businesses promote their services or products.',
      image: '/industries/cosmetics.webp'
    },
    {
      title: 'Home Decor and Furniture',
      description:
        'We will help home decor and furniture businesses promote their products.',
      image: '/industries/furniture.webp'
    }
  ],
  footer:
    'By partnering with Pencil Peel IMT, you can unlock the full potential of metro train advertising and drive business growth. Contact us to learn more about our metro train advertising services.'
};

outsideIndustries = [
    {
      title: 'Big Brands and Services',
      description: 'We will help banks, tech companies, FMCG products, and other big brands promote their products and services.',
      icon: 'pi pi-building',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-500'
    },
    {
      title: 'Government Campaigns',
      description: 'Our team will help government agencies promote public health messages, voter awareness drives, and other initiatives.',
      icon: 'pi pi-flag',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-500'
    },
    {
      title: 'Entertainment',
      description: 'We will help entertainment businesses promote movie releases, OTT platforms, events, and other entertainment-related services.',
      icon: 'pi pi-play',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-500'
    },
    {
      title: 'Local Businesses',
      description: 'Our team will help local businesses, such as hospitals, educational institutions, and retail chains, promote their products and services.',
      icon: 'pi pi-home',
      iconColor: 'text-green-500',
      borderColor: 'border-green-500'
    }
  ];

  outsideBenefits = [
    {
      title: 'High Visibility',
      description: 'We will help you capture attention in high-traffic areas and during rush hours.',
      icon: 'pi pi-eye'
    },
    {
      title: 'Wider Audience Reach',
      description: 'Our team will help you target people both inside and outside the metro system.',
      icon: 'pi pi-users'
    },
    {
      title: 'Dynamic and Impactful',
      description: 'We will create moving visuals that leave a lasting impression.',
      icon: 'pi pi-bolt'
    },
    {
      title: 'Scalable Campaigns',
      description: 'Our team will help you run multiple trains with the same message across different routes and regions.',
      icon: 'pi pi-clone'
    }
  ];

  insideIndustries = [
    {
      title: 'Commuter-Specific Services',
      description: 'We will help e-learning platforms, online shopping apps, fitness centres, and other commuter-specific services promote their products and services.',
      icon: 'pi pi-mobile',
      iconColor: 'text-cyan-500',
      borderColor: 'border-cyan-500'
    },
    {
      title: 'Food and Beverages',
      description: 'Our team will help restaurants, cafes, and delivery services promote their products and services.',
      icon: 'pi pi-shopping-cart',
      iconColor: 'text-red-500',
      borderColor: 'border-red-500'
    },
    {
      title: 'Personal Services',
      description: 'We will help beauty salons, mobile plans, insurance products, and other personal services promote their products and services.',
      icon: 'pi pi-user',
      iconColor: 'text-pink-500',
      borderColor: 'border-pink-500'
    },
    {
      title: 'Local Events',
      description: 'Our team will help local events, such as exhibitions, festivals, or workshops, promote their events.',
      icon: 'pi pi-calendar',
      iconColor: 'text-teal-500',
      borderColor: 'border-teal-500'
    }
  ];

  insideBenefits = [
    {
      title: 'Captive Audience',
      description: 'We will help you deliver detailed messages or promote products that require attention.',
      icon: 'pi pi-eye'
    },
    {
      title: 'Targeted Reach',
      description: 'Our team will help you target demographic-specific ads based on metro line routes.',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'Cost-Effective',
      description: 'We will provide smaller space and less production cost compared to exterior ads.',
      icon: 'pi pi-dollar'
    },
    {
      title: 'Engagement Opportunities',
      description: 'Our team will incorporate QR codes or interactive elements for immediate action.',
      icon: 'pi pi-qrcode'
    }
  ];

  bestPractices = [
    {
      title: 'Choose Strategic Locations',
      description: 'Our team will help you select high-traffic metro stations or routes that align with your target audience.',
      icon: 'pi pi-map-marker',
      iconBg: 'bg-orange-500'
    },
    {
      title: 'Engaging Design',
      description: 'We will create visually appealing ads that capture the attention of commuters and pedestrians.',
      icon: 'pi pi-palette',
      iconBg: 'bg-blue-500'
    },
    {
      title: 'Clear Messaging',
      description: 'Our team will help you craft clear and concise messages that resonate with your target audience.',
      icon: 'pi pi-comment',
      iconBg: 'bg-purple-500'
    },
    {
      title: 'Call-to-Action',
      description: 'We will incorporate QR codes, URLs, or other call-to-action elements to encourage commuters to engage with your brand.',
      icon: 'pi pi-qrcode',
      iconBg: 'bg-green-500'
    },
    {
      title: 'Measure and Optimize',
      description: 'Our team will help you track the effectiveness of your campaign and make data-driven decisions to optimize your ad spend.',
      icon: 'pi pi-chart-bar',
      iconBg: 'bg-red-500'
    },
    {
      title: 'Brand Consistency',
      description: 'We will ensure that your metro train advertising campaign aligns with your brand\'s overall marketing strategy and messaging.',
      icon: 'pi pi-verified',
      iconBg: 'bg-pink-500'
    },
    {
      title: 'Creative Storytelling',
      description: 'Our team will help you create engaging stories that capture the attention of commuters and leave a lasting impression.',
      icon: 'pi pi-book',
      iconBg: 'bg-indigo-500'
    },
    {
      title: 'Integration with Other Channels',
      description: 'We will help you integrate your metro train advertising campaign with other marketing channels, such as social media and digital advertising.',
      icon: 'pi pi-share-alt',
      iconBg: 'bg-teal-500'
    }
  ];

  whyChooseMetroTrain: any = {
  title: "How Pencil Peel IMT Works on Metro Train Advertising Campaigns",
  description: "",
  features: [
    {
      id: 1,
      title: 'Develop a Customized Strategy',
      description: 'We will develop a customized strategy that meets your business needs and goals.',
      icon: 'pi-cog',
      borderColor: 'purple-500',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    },
    {
      id: 2,
      title: 'Create Engaging Content',
      description: 'Our team will create engaging content that resonates with your target audience.',
      icon: 'pi-bullhorn',
      borderColor: 'red-500',
      iconBgColor: 'red-100',
      iconColor: 'red-600'
    },
    {
      id: 3,
      title: 'Optimize Campaigns',
      description: 'We will optimize campaigns to ensure maximum ROI and achieve your business objectives.',
      icon: 'pi-chart-line',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    }
  ],
  footer: "By partnering with Pencil Peel IMT, you can unlock the full potential of metro train advertising and drive business growth. Contact us to learn more about our metro train advertising services."
};

 insideOptions = [
    {
      title: 'Above Seats',
      description: 'Our team will help you place ads above seats to capture the attention of commuters.'
    },
    {
      title: 'Door Panels',
      description: 'We will help you place ads on door panels to reach commuters as they enter or exit the train.'
    },
    {
      title: 'Windows',
      description: 'Our team will help you place ads on windows to create a visually appealing display.'
    },
    {
      title: 'Handles',
      description: 'We will help you place ads on handles to reach commuters as they hold onto them during their journey.'
    },
    {
      title: 'Pillars',
      description: 'Our team will help you place ads on pillars to reach commuters as they stand or sit nearby.'
    },
    {
      title: 'Advertising Frames',
      description: 'We will help you place ads in specially designed frames to create a premium display.'
    },
    {
      title: 'Digital Screens',
      description: 'Our team will help you place ads on digital screens to reach commuters with dynamic content.'
    }
  ];

  outsideOptions = [
    {
      title: 'Train Wraps',
      description: 'Our team will help you create a full train wrap to turn the train into a moving billboard.'
    },
    {
      title: 'Side Panels',
      description: 'We will help you place ads on side panels to reach pedestrians and motorists.'
    },
    {
      title: 'Front and Rear',
      description: 'Our team will help you place ads on the front and rear of the train to create a high-impact display.'
    },
    {
      title: 'Train Carriages',
      description: 'We will help you place ads on train carriages to reach a wider audience.'
    },
    {
      title: 'Station Platforms',
      description: 'Our team will help you place ads on station platforms to reach commuters as they wait for trains.'
    },
    {
      title: 'Station Posters',
      description: 'We will help you place ads on station posters to reach commuters as they walk through the station.'
    },
    {
      title: 'Tunnel Ads',
      description: 'Our team will help you place ads in tunnels to reach commuters as they travel through the metro system.'
    }
  ];



}
