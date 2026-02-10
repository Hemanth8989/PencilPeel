import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Industrycards } from "../../../components/industrycards/industrycards";
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-metropillaradvertising',
  imports: [OutdoorHeroSection, Benefitsnew, Industrycards,CommonModule,TimelineModule,CardModule, Quotes],
  templateUrl: './metropillaradvertising.html',
  styleUrl: './metropillaradvertising.scss'
})
export class Metropillaradvertising {
  metroPillarHeroConfig: HeroConfig = {
  badgeText: '#1 Metro Pillar Advertising',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Metro Pillar',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel</strong>, we specialize in creating effective metro pillar advertising campaigns that drive business growth and increase brand visibility.',
  backgroundImage: 'https://images.pexels.com/photos/2541249/pexels-photo-2541249.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Connect with Daily Commuters'
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
  { text: "Pillar Your Brand's Success with Pencil Peel IMT's Metro Pillar Advertising" },
  { text: "Support Your Business Growth with Pencil Peel IMT's Metro Ads" },
  { text: "Elevate Your Brand Visibility with Pencil Peel IMT's Metro Pillar Solutions" },
  { text: "Reach New Heights with Pencil Peel IMT's Strategic Metro Pillar Advertising" }
];

benefitsMetroPillarAdvertising: any = {
  title: `Benefits of <span class="text-orange-500">Metro Pillar Advertising</span> with Pencil Peel`,
  description: `Our team will highlight the key benefits of metro pillar advertising, helping your business maximize its impact and reach:`,
  benefits: [
    {
      icon: 'pi-eye',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'High Visibility and Reach',
      description: 'Reach a large audience in densely populated urban areas with prominent metro pillar placements.'
    },
    {
      icon: 'pi-users',
      gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
      title: 'Captive Audience',
      description: 'Engage commuters waiting for trains or passing by pillars, ensuring they have time to absorb your message.'
    },
    {
      icon: 'pi-dollar',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Cost-Effective',
      description: 'Achieve long-term exposure at a relatively low cost compared to other advertising mediums.'
    },
    {
      icon: 'pi-map-marker',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Localized Targeting',
      description: 'Effectively target local audiences in specific urban areas for maximum relevance.'
    },
    {
      icon: 'pi-refresh',
      gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
      title: 'Repetition and Recall',
      description: 'Ensure daily commuters are repeatedly exposed to your ads, boosting brand recall.'
    },
    {
      icon: 'pi-palette',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Creative Flexibility',
      description: 'Create eye-catching and innovative advertisements to stand out in busy urban environments.'
    },
    {
      icon: 'pi-clock',
      gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
      title: 'Long-Term Exposure',
      description: 'Keep your ads in place for weeks or months, ensuring sustained visibility.'
    },
    {
      icon: 'pi-globe',
      gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
      title: 'Appeals to a Wide Demographic',
      description: 'Reach a diverse audience, from daily commuters to tourists, with broad appeal.'
    },
    {
      icon: 'pi-star',
      gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
      title: 'Enhances Brand Prestige',
      description: 'Boost brand credibility by associating with high-traffic, urban metro systems.'
    },
    {
      icon: 'pi-leaf',
      gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
      title: 'Eco-Friendly Option',
      description: 'Utilize environmentally friendly advertising materials to align with sustainable practices.'
    },
    {
      icon: 'pi-link',
      gradient: 'bg-gradient-to-tr from-orange-500 to-red-600',
      title: 'Integration with Other Campaigns',
      description: 'Create a cohesive campaign by integrating metro pillar ads with other marketing efforts.'
    },
    {
      icon: 'pi-megaphone',
      gradient: 'bg-gradient-to-tr from-indigo-400 to-indigo-600',
      title: 'Ideal for Call-to-Actions (CTAs)',
      description: 'Craft compelling CTAs that drive commuter engagement and action.'
    }
  ]
};

metroPillarAdvertisingData = {
  title: 'Industries that Can Benefit from Metro Pillar Advertising with Pencil Peel',
  description: 'We will help various industries reach their target audience through metro pillar advertising. Some of the industries that can benefit include:',
  industries: [
    {
      title: 'Retail',
      description: 'Our team will help retail businesses promote their products and drive foot traffic to their stores.',
      image: '/industries/retail.webp'
    },
    {
      title: 'Technology',
      description: 'We will help technology businesses promote their innovative products or services to urban commuters.',
      image: '/industries/technology.webp'
    },
    {
      title: 'Travel and Hospitality',
      description: 'We will help travel and hospitality businesses promote their destinations or services to metro commuters.',
      image: '/industries/travel.webp'
    },
    {
      title: 'Real Estate',
      description: 'We will help real estate businesses showcase their properties or services to a local urban audience.',
      image: '/industries/realestate.webp'
    },
    {
      title: 'Entertainment',
      description: 'We will help entertainment businesses promote their events or services to a diverse metro audience.',
      image: '/industries/entertainment.webp'
    },
    {
      title: 'Food and Beverage',
      description: 'We will help food and beverage businesses promote their products or services to hungry commuters.',
      image: '/industries/foodbeverage.webp'
    },
    {
      title: 'Automotive',
      description: 'We will help automotive businesses promote their vehicles or services to urban consumers.',
      image: '/industries/automotive.webp'
    },
    {
      title: 'Education',
      description: 'We will help educational institutions promote their programs or services to students and professionals.',
      image: '/industries/education.webp'
    },
    {
      title: 'Healthcare',
      description: 'We will help healthcare businesses promote their services or products to health-conscious commuters.',
      image: '/industries/healthcare.webp'
    },
    {
      title: 'Fashion and Apparel',
      description: 'We will help fashion and apparel businesses promote their stylish products to trend-savvy commuters.',
      image: '/industries/fashion.webp'
    },
    {
      title: 'Sports and Fitness',
      description: 'We will help sports and fitness businesses promote their services or products to active urbanites.',
      image: '/industries/sportsfitness.webp'
    },
    {
      title: 'Financial Services',
      description: 'We will help financial services businesses promote their products or services to urban professionals.',
      image: '/industries/financialservices.webp'
    },
    {
      title: 'Beauty and Wellness',
      description: 'We will help beauty and wellness businesses promote their services or products to style-conscious commuters.',
      image: '/industries/beautywellness.webp'
    },
    {
      title: 'Home Decor and Furniture',
      description: 'We will help home decor and furniture businesses promote their products to urban homeowners and renters.',
      image: '/industries/homedecor.webp'
    },
    {
      title: 'E-commerce',
      description: 'We will help e-commerce businesses promote their products and services to a wide urban audience.',
      image: '/industries/ecommerce.webp'
    },
    {
      title: 'Luxury Brands',
      description: 'We will help luxury brands promote their high-end products and services to affluent commuters.',
      image: '/industries/luxurybrands.webp'
    },
    {
      title: 'International Education',
      description: 'We will help educational institutions promote their programs and services to international students in urban areas.',
      image: '/industries/internationaleducation.webp'
    },
    {
      title: 'Global Finance',
      description: 'We will help financial institutions promote their services and products to a global urban audience.',
      image: '/industries/globalfinance.webp'
    },
    {
      title: 'Tourism and Travel',
      description: 'We will help tourism boards and travel companies promote destinations and services to metro commuters.',
      image: '/industries/tourism.webp'
    },
    {
      title: 'Food Delivery Services',
      description: 'We will help food delivery services promote their platforms and services to busy urban consumers.',
      image: '/industries/fooddelivery.webp'
    },
    {
      title: 'Ride-Sharing Services',
      description: 'We will help ride-sharing services promote their platforms and services to metro commuters.',
      image: '/industries/ridesharing.webp'
    }
  ]
};

metroProcessSteps = [
  {
    step: 'Step 1',
    title: 'Business Goals Analysis',
    icon: 'pi pi-flag',
    markerColor: 'bg-orange-500',
    badgeColor: 'bg-orange-100 text-orange-800',
    description: 'We discuss your business objectives and identify the best way to achieve them through metro pillar advertising. Our team ensures your metro advertising strategy aligns with your overall marketing goals and brand vision for maximum impact.'
  },
  {
    step: 'Step 2',
    title: 'Market Research',
    icon: 'pi pi-search',
    markerColor: 'bg-blue-500',
    badgeColor: 'bg-blue-100 text-blue-800',
    description: 'We conduct comprehensive market research to understand your target audience and their commuting patterns. Our research identifies the most effective metro pillar locations for maximum visibility and engagement with your ideal customers.'
  },
  {
    step: 'Step 3',
    title: 'Strategy Development',
    icon: 'pi pi-cog',
    markerColor: 'bg-purple-500',
    badgeColor: 'bg-purple-100 text-purple-800',
    description: 'We develop a customized metro pillar advertising strategy that meets your specific business needs and goals. Our team creates a detailed campaign timeline with strategic placement schedules and budget optimization to ensure maximum effectiveness.'
  },
  {
    step: 'Step 4',
    title: 'Creative Design',
    icon: 'pi pi-palette',
    markerColor: 'bg-green-500',
    badgeColor: 'bg-green-100 text-green-800',
    description: 'Our creative team designs engaging advertisements that resonate with your target audience and stand out in busy metro environments. We ensure all designs maintain your brand identity while maximizing visual impact for metro commuters.'
  },
  {
    step: 'Step 5',
    title: 'Campaign Implementation',
    icon: 'pi pi-play',
    markerColor: 'bg-red-500',
    badgeColor: 'bg-red-100 text-red-800',
    description: 'We implement the campaign and ensure your advertisements are professionally displayed in selected metro pillar locations. Our team conducts regular site visits to ensure advertisements maintain high quality and visibility throughout the campaign duration.'
  },
  {
    step: 'Ongoing',
    title: 'Track & Optimize',
    icon: 'pi pi-chart-line',
    markerColor: 'bg-indigo-500',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    description: 'We track the performance of your metro pillar campaign using advanced analytics and engagement metrics. Our team makes data-driven adjustments as needed to ensure maximum return on investment and provides ongoing support for sustained campaign success.'
  }
];


primeLocations = [
  {
    name: 'Metro Stations',
    description: 'Our team will help you place ads on metro pillars in high-traffic stations to reach a large audience of daily commuters.',
    image: 'assets/images/metro-station.jpg',
    category: 'High-Traffic Area',
    icon: 'pi pi-building',
    gradientColor: 'bg-gradient-to-r from-orange-400 to-orange-600'
  },
  {
    name: 'Platform Areas',
    description: 'We help you place ads on pillars on platforms to reach commuters as they wait for trains, ensuring maximum exposure time.',
    image: 'assets/images/platform.jpg',
    category: 'Waiting Time',
    icon: 'pi pi-stopwatch',
    gradientColor: 'bg-gradient-to-r from-blue-400 to-blue-600'
  },
  {
    name: 'Concourse Areas',
    description: 'Our team helps you place ads on pillars in concourse areas to reach commuters as they walk through the station.',
    image: 'assets/images/concourse.jpg',
    category: 'High Footfall',
    icon: 'pi pi-users',
    gradientColor: 'bg-gradient-to-r from-green-400 to-green-600'
  },
  {
    name: 'Entrances & Exits',
    description: 'We help you place ads on pillars at entrances and exits to reach commuters as they enter or exit the station.',
    image: 'assets/images/entrance.jpg',
    category: 'Entry Points',
    icon: 'pi pi-sign-in',
    gradientColor: 'bg-gradient-to-r from-purple-400 to-purple-600'
  },
  {
    name: 'Near Food Courts',
    description: 'Our team helps you place ads on pillars near food courts or restaurants to reach commuters as they take a break.',
    image: 'assets/images/food-court.jpg',
    category: 'Leisure Areas',
    icon: 'pi pi-heart',
    gradientColor: 'bg-gradient-to-r from-red-400 to-red-600'
  },
  {
    name: 'Near Retail Areas',
    description: 'We help you place ads on pillars near shops or retail areas to reach commuters as they shop and browse.',
    image: 'assets/images/retail.jpg',
    category: 'Shopping Areas',
    icon: 'pi pi-shopping-bag',
    gradientColor: 'bg-gradient-to-r from-indigo-400 to-indigo-600'
  }
];

additionalLocations = [
  {
    name: 'Ticketing Areas',
    description: 'Reach commuters as they purchase tickets with strategic pillar placement.',
    icon: 'pi pi-ticket'
  },
  {
    name: 'Waiting Areas',
    description: 'Target commuters in waiting areas where they have time to engage with your message.',
    icon: 'pi pi-clock'
  },
  {
    name: 'Corridors',
    description: 'Place ads in corridors to reach commuters as they walk through the station.',
    icon: 'pi pi-arrow-right'
  },
  {
    name: 'Near Escalators',
    description: 'Strategic placement near escalators and stairways for maximum visibility.',
    icon: 'pi pi-sort-up'
  },
  {
    name: 'Near Information Desks',
    description: 'Reach commuters as they seek information and assistance at help desks.',
    icon: 'pi pi-info-circle'
  },
  {
    name: 'Near Parking Areas',
    description: 'Target commuters near parking areas as they transition to metro transport.',
    icon: 'pi pi-car'
  }
];

benefitsPartneringPencilPeel: any = {
  title: `Benefits of Partnering with <span class="text-orange-500">Pencil Peel IMT</span> for Metro Pillar Advertising`,
  description: `By partnering with Pencil Peel IMT, you can unlock the full potential of metro pillar advertising to achieve your marketing goals:`,
  benefits: [
    {
      icon: 'pi-chart-line',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Increase Brand Awareness and Recognition',
      description: 'We will elevate your brand visibility and recognition through strategic, high-impact metro pillar advertising campaigns in prime urban locations.'
    },
    {
      icon: 'pi-shopping-cart',
      gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
      title: 'Drive Sales and Revenue',
      description: 'Our targeted campaigns will convert commuter exposure into measurable sales growth and revenue increases for your business.'
    },
    {
      icon: 'pi-users',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Reach a Large and Captive Audience',
      description: 'Connect with thousands of daily metro commuters who are a captive audience, ensuring high engagement in high-traffic transit hubs.'
    }
  ]
};


}
