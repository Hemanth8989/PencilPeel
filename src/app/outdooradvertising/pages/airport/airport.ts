import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Imagecards } from "../../imagecards/imagecards";
import { Quotes } from '../../../components/quotes/quotes';
interface AirportDisplayType
 {
  title: string;
  description: string;
  image: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Industry {
  title: string;
  description: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-airport',
  imports: [CommonModule, ButtonModule, Industrycards, Benefitsnew, OutdoorHeroSection, Imagecards, Quotes],
  templateUrl: './airport.html',
  styleUrl: './airport.scss'
})
export class Airport {
  airportHeroConfig: HeroConfig = {
  badgeText: '#1 Airport Advertising Strategy',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Airport Advertising',
      'Strategy'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective airport advertising campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Reach Premium Travelers'
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
  { text: "Touch Down with Success: Pencil Peel IMT's Airport Advertising Solutions" },
  { text: "Fly High with Pencil Peel IMT's Impactful Airport Ads" },
  { text: "Arrive at Your Target Audience with Pencil Peel IMT's Airport Advertising" },
  { text: "Take Your Brand to New Heights with Pencil Peel IMT's Airport Advertising Expertise" }
];


displayTypes: AirportDisplayType[] = [
  {
    title: 'Digital Displays',
    description: 'We will place high-definition screens in strategic locations like departure gates, baggage claim areas, and lounges.',
    image: 'outdoor/airport/airportcrowd.webp'
  },
  {
    title: 'Billboards and Posters',
    description: 'Our team will design and place large-format advertisements in terminals, walkways, and parking areas.',
    image: 'outdoor/airport/airportcrowd1.webp'
  },
  {
    title: 'Baggage Claim Areas',
    description: 'We will create ads on the walls, carousel wraps, or nearby screens.',
    image: 'outdoor/airport/airportentrance1.webp'
  },
  {
    title: 'In-Terminal Retail Partnerships',
    description: 'Our team will help you create branded kiosks or pop-up stores for direct sales and product demonstrations.',
    image: 'outdoor/airport/airportlounge3.webp'
  },
  {
    title: 'Airport Lounges',
    description: 'We will target premium travellers with exclusive ads or sponsored content in lounges.',
    image: 'outdoor/airport/airportlounge4.webp'
  },
  {
    title: 'Jet Bridges and Boarding Areas',
    description: 'Our team will place ads in areas where passengers are waiting to board flights.',
    image: 'outdoor/airport/airportlounge1.webp'
  },
  {
    title: 'Restrooms and Elevators',
    description: 'We will create creative placements in spaces with consistent foot traffic.',
    image: 'outdoor/pillar/escalator.webp'
  },
  {
    title: 'Vehicle Wraps',
    description: 'Our team will design and place ads on airport shuttle buses or vehicles moving around the airport.',
    image: 'outdoor/airport/airportentrance.webp'
  },
  {
    title: 'Airport Terminals',
    description: 'We will place ads in terminals, including arrival and departure areas.',
    image: 'outdoor/airport/airportentrance.webp'
  },
  {
    title: 'Airport Parking Areas',
    description: 'Our team will place ads in parking areas, including garages and lots.',
    image: 'outdoor/airport/airportparking.webp'
  }
];


  benefits: Benefit[] = [
    {
      title: 'Captive Audience',
      description: 'We will help you reach a captive audience of travellers who spend significant time in airports.',
      icon: 'pi pi-users',
      color: 'orange'
    },
    {
      title: 'High-Value Demographics',
      description: 'Our team will help you target affluent individuals, business professionals, and decision-makers.',
      icon: 'pi pi-briefcase',
      color: 'blue'
    },
    {
      title: 'Global Reach',
      description: 'We will help you reach a diverse audience from various cultures and regions.',
      icon: 'pi pi-globe',
      color: 'green'
    },
    {
      title: 'Extended Dwell Time',
      description: 'Our team will take advantage of extended dwell times to increase ad visibility and retention.',
      icon: 'pi pi-clock',
      color: 'purple'
    },
    {
      title: 'Brand Credibility',
      description: 'We will help you associate your brand with prestige and quality.',
      icon: 'pi pi-star',
      color: 'pink'
    },
    {
      title: 'Targeted Marketing',
      description: 'Our team will help you target specific audiences.',
      icon: 'pi pi-compass',
      color: 'teal'
    },
    {
      title: 'Versatile Formats',
      description: 'We will create diverse and creative advertising campaigns.',
      icon: 'pi pi-th-large',
      color: 'yellow'
    },
    {
      title: 'Improved Brand Recall',
      description: 'Our team will help you increase brand recall through effective airport advertising, with studies showing a 42% increase in brand recall.',
      icon: 'pi pi-chart-line',
      color: 'red'
    },
    {
      title: 'Increased Purchase Intent',
      description: 'We will help you drive purchase intent among travellers, with airport ads resulting in a 21% increase in purchase intent.',
      icon: 'pi pi-shopping-cart',
      color: 'indigo'
    },
    {
      title: 'Enhanced Customer Engagement',
      description: 'Our team will create engaging airport ads that boost customer engagement by up to 70%.',
      icon: 'pi pi-comments',
      color: 'rose'
    },
    {
      title: 'Positive Brand Association',
      description: 'We will help you associate your brand with travel, adventure, and exploration, creating positive emotional connections.',
      icon: 'pi pi-heart',
      color: 'emerald'
    },
    {
      title: 'Long-Term Impact',
      description: 'Our team will help you create long-term brand awareness and recognition, influencing purchasing decisions.',
      icon: 'pi pi-trending-up',
      color: 'amber'
    },
    {
      title: 'Measurable Results',
      description: 'We will help you track the effectiveness of your airport advertising campaigns, providing valuable insights.',
      icon: 'pi pi-chart-bar',
      color: 'cyan'
    },
    {
      title: 'Increased Brand Visibility',
      description: 'Our team will increase brand visibility through high-traffic areas, ensuring maximum exposure.',
      icon: 'pi pi-eye',
      color: 'lime'
    }
  ];

  industries: Industry[] = [
    {
      title: 'Travel and Tourism',
      description: 'We will help travel companies, hotels, and tourism boards promote their destinations and services to travellers.',
      icon: 'pi pi-send'
    },
    {
      title: 'Luxury Brands',
      description: 'Our team will help luxury brands reach high-end travellers and business professionals.',
      icon: 'pi pi-star'
    },
    {
      title: 'Automotive',
      description: 'We will help automotive companies promote their vehicles to travellers.',
      icon: 'pi pi-car'
    },
    {
      title: 'Finance and Banking',
      description: 'Our team will help financial institutions promote their services to business travellers and international visitors.',
      icon: 'pi pi-wallet'
    },
    {
      title: 'Technology',
      description: 'We will help tech companies promote their products and services to a diverse audience.',
      icon: 'pi pi-desktop'
    },
    {
      title: 'Retail',
      description: 'Our team will help retailers promote their products and services to travellers.',
      icon: 'pi pi-shopping-cart'
    },
    {
      title: 'Food and Beverage',
      description: 'We will help food and beverage companies promote their products and services to travellers.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Entertainment',
      description: 'Our team will help entertainment companies promote their events, shows, and attractions to travellers.',
      icon: 'pi pi-play'
    }
  ];

  services: Service[] = [
    {
      title: 'Targeted Advertising',
      description: 'Our team will select specific airport locations and demographics to target your desired audience.',
      icon: 'pi pi-compass'
    },
    {
      title: 'Creative Ad Design',
      description: 'We will design visually appealing and effective ads that capture the attention of travellers.',
      icon: 'pi pi-palette'
    },
    {
      title: 'Strategic Ad Placement',
      description: 'Our team will place ads in high-traffic areas to maximize visibility and reach.',
      icon: 'pi pi-map-marker'
    },
    {
      title: 'Measurable Results',
      description: 'We will track the effectiveness of your airport advertising campaigns, providing valuable insights into passenger behaviour.',
      icon: 'pi pi-chart-line'
    }
  ];

  whycfeatures: any[] = [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has years of experience in airport advertising.',
      icon: 'pi-star',
      borderColor: 'yellow-500',
      iconBgColor: 'yellow-100',
      iconColor: 'yellow-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We will tailor our services to meet the unique needs of your business.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'Our team has helped numerous businesses achieve success through airport advertising.',
      icon: 'pi-check-circle',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    }
  ];
  industry:any = {
  title: 'Industries that Can Benefit from Bus Shelter Advertising',
  description: 'We will help various industries reach their target audience through bus shelter advertising. Some of the industries that can benefit from this type of advertising include'
}
industryCards = [
  {
    title: 'Retail',
    description: 'We will help retail businesses promote their products and services to a diverse audience.',
    image: '/dm/industries/iretail.webp'
  },
  {
    title: 'Real Estate',
    description: 'Our team will assist real estate companies in showcasing their properties and attracting potential buyers.',
    image: '/dm/industries/construction.webp'
  },
  {
    title: 'Automotive',
    description: 'We will help automotive businesses reach a wide audience and promote their vehicles.',
    image: '/dm/industries/iauto.webp'
  },
  {
    title: 'Food and Beverage',
    description: 'We will create ads that showcase food and beverage products and services.',
    image: '/dm/industries/ibar.webp'
  },
  {
    title: 'Entertainment',
    description: 'We will help entertainment businesses promote their events and services.',
    image: '/dm/industries/ieducation.webp'
  }
];
benefitcontent:any = {
  title: 'Benefits of Partnering with Pencil Peel IMT',
  description: 'By partnering with Pencil Peel IMT for airport advertising, you can'
}
benefitsnew = [
  {
    icon: 'pi pi-users',
    gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
    title: 'Reach a Captive Audience',
    description: "Airports provide a unique opportunity to reach a captive audience of travellers who are more receptive to advertising messages."
  },
  {
    icon: 'pi pi-chart-line',
    gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
    title: 'Increase Brand Awareness',
    description: "Airport advertising can help increase brand awareness and drive business growth."
  },
  {
    icon: 'pi pi-bullseye',
    gradient: 'bg-gradient-to-tr from-pink-400 to-purple-500',
    title: 'Drive Conversions',
    description: "Our team will help you develop advertising campaigns that drive conversions and achieve your business objectives."
  }
];


whyChooseData = [
    {
      id: 'expertise',
      title: 'Expertise',
      icon: 'pi pi-star',
      gradient: 'from-orange-400 to-orange-600',
      hoverColor: 'orange',
      description: 'We will leverage our years of experience in airport advertising to deliver customized solutions that meet the unique needs of your business. Our team will:',
      points: [
        {
          title: 'Develop targeted advertising campaigns',
          description: 'We will help you reach your target audience through strategically placed advertisements in airports.'
        },
        {
          title: 'Utilize airport advertising channels',
          description: 'We will utilize various airport advertising channels, including digital displays, banners, and experiential marketing, to reach your target audience.'
        }
      ]
    },
    {
      id: 'customized',
      title: 'Customized Solutions',
      icon: 'pi pi-cog',
      gradient: 'from-green-400 to-green-600',
      hoverColor: 'green',
      description: 'We will tailor our services to meet the unique needs of your business. Our team will:',
      points: [
        {
          title: 'Conduct market research',
          description: 'We will conduct market research to understand your target audience and develop a customized advertising strategy.'
        },
        {
          title: 'Develop a comprehensive advertising plan',
          description: 'We will develop a comprehensive advertising plan that includes ad creative development, media planning, and campaign execution.'
        }
      ]
    },
    {
      id: 'results',
      title: 'Proven Results',
      icon: 'pi pi-chart-line',
      gradient: 'from-blue-400 to-blue-600',
      hoverColor: 'blue',
      description: 'Our team has helped numerous businesses achieve success through airport advertising. We will:',
      points: [
        {
          title: 'Track and measure campaign performance',
          description: 'We will track and measure the performance of your advertising campaign to ensure that it is meeting its objectives.'
        },
        {
          title: 'Provide regular reporting and analysis',
          description: 'We will provide regular reporting and analysis to help you understand the impact of your advertising campaign.'
        }
      ]
    }
  ];

} 
