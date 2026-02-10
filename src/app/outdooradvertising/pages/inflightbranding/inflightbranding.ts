import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { Industrycards } from "../../../components/industrycards/industrycards";
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-inflightbranding',
  imports: [OutdoorHeroSection, Industrycards, Benefitsnew, Whycpencilpeel,Quotes],
  templateUrl: './inflightbranding.html',
  styleUrl: './inflightbranding.scss'
})
export class Inflightbranding {
  inflightHeroConfig: HeroConfig = {
  badgeText: '#1 Inflight Advertising Specialists',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Inflight Branding &',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective inflight branding campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/1089549/pexels-photo-1089549.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Captive Premium Audience'
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
  { text: "Reach New Heights with Pencil Peel IMT's Inflight Branding Solutions" },
  { text: "Fly High with Pencil Peel IMT's Effective Inflight Advertising" },
  { text: "Soar to Success with Pencil Peel IMT's Inflight Branding Expertise" },
  { text: "Cruise to Brand Success with Pencil Peel IMT's Inflight Advertising Solutions" }
];

inflightBrandingData = {
  title: 'Industries that Can Benefit from Inflight Branding with Pencil Peel',
  description: 'We will help various industries reach their target audience through inflight branding. Some of the industries that can benefit include:',
  industries: [
    {
      title: 'Luxury Goods',
      description: 'Our team will help luxury goods businesses promote their products to high-end travellers.',
      image: '/industries/luxurygoods.webp'
    },
    {
      title: 'Financial Services',
      description: 'We will help financial services businesses reach higher-income demographics.',
      image: '/industries/financial.webp'
    },
    {
      title: 'Premium Brands',
      description: 'Our team will help premium brands associate themselves with the luxury experience of air travel.',
      image: '/industries/premiumbrands.webp'
    },
    {
      title: 'Travel and Hospitality',
      description: 'We will help travel and hospitality businesses promote their services to travellers.',
      image: '/industries/tourism.webp'
    },
    {
      title: 'Technology and Gadgets',
      description: 'We will help technology and gadget businesses reach a tech-savvy audience.',
      image: '/industries/gadgets.webp'
    },
    {
      title: 'Fashion and Apparel',
      description: 'We will help fashion and apparel businesses promote their products to style-conscious travellers.',
      image: '/industries/fashion.webp'
    },
    {
      title: 'Automotive',
      description: 'We will help automotive businesses reach high-end car enthusiasts and promote their luxury vehicles.',
      image: '/industries/automotive.webp'
    },
    {
      title: 'Food and Beverage',
      description: 'We will help food and beverage businesses promote their products to travellers, such as gourmet snacks or premium drinks.',
      image: '/industries/food.webp'
    },
    {
      title: 'Wellness and Fitness',
      description: 'We will help wellness and fitness businesses promote their services to health-conscious travellers.',
      image: '/industries/wellness.webp'
    },
    {
      title: 'Tourism and Destination Marketing',
      description: 'We will help tourism boards and destination marketing organizations promote their destinations to travellers.',
      image: '/industries/tourism.webp'
    },
    {
      title: 'Cosmetics and Beauty',
      description: 'We will help cosmetics and beauty businesses promote their products to travellers.',
      image: '/industries/cosmetics.webp'
    },
    {
      title: 'Jewelry and Accessories',
      description: 'We will help jewellery and accessory businesses promote their products to high-end travellers.',
      image: '/industries/jewellery.webp'
    },
    {
      title: 'Sports and Leisure',
      description: 'We will help sports and leisure businesses promote their services to travellers, such as sports equipment or outdoor activities.',
      image: '/industries/sports.webp'
    },
    {
      title: 'Education and Training',
      description: 'We will help education and training businesses promote their services to travellers, such as language courses or professional development programs.',
      image: '/industries/education.webp'
    },
    {
      title: 'Entertainment and Media',
      description: 'We will help entertainment and media businesses promote their products to travellers, such as movies, music, or games.',
      image: '/industries/media.webp'
    }
  ]
};

benefitsInflightBranding: any = {
  title: `Benefits of <span class="text-orange-500">Inflight Branding</span> with Pencil Peel`,
  description: `Our team will highlight the key benefits of inflight branding, helping your business maximize its impact and reach:`,
  benefits: [
    {
      icon: 'pi-users',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Captive Audience',
      description: 'Reach passengers who are limited in activity options during a flight, making them more receptive to advertising.'
    },
    {
      icon: 'pi-star',
      gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
      title: 'Premium Audience',
      description: 'Target higher-income demographics, ideal for luxury goods and premium brands.'
    },
    {
      icon: 'pi-globe',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Global Reach',
      description: 'Expand your brand’s reach by connecting with diverse audiences through airlines with international routes.'
    },
    {
      icon: 'pi-clock',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Extended Engagement Time',
      description: 'Ensure your brand message is retained through prolonged exposure during flights, boosting brand recall.'
    },
    {
      icon: 'pi-briefcase',
      gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
      title: 'Brand Association with Premium Experience',
      description: 'Align your brand with the luxury and exclusivity of air travel, enhancing perceived value.'
    },
    {
      icon: 'pi-lightbulb',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Creative Opportunities',
      description: 'Stand out with interactive experiences such as in-flight games, contests, or sponsored content.'
    },
    {
      icon: 'pi-smile',
      gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
      title: 'Positive Mood of Passengers',
      description: 'Engage travellers who are often in a relaxed or vacation mindset, making them more receptive to advertising.'
    },
    {
      icon: 'pi-id-card',
      gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
      title: 'High Brand Recall',
      description: 'Ensure strong recall with limited distractions and the novelty of the inflight environment.'
    },
    {
      icon: 'pi-share-alt',
      gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
      title: 'Cross-Promotion Opportunities',
      description: 'Collaborate with airlines for joint promotions, such as co-branded credit cards or exclusive offers.'
    },
    {
      icon: 'pi-leaf',
      gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
      title: 'Environmentally Conscious Branding',
      description: 'Showcase your commitment to eco-friendly practices, enhancing your brand’s reputation.'
    },
    {
      icon: 'pi-megaphone',
      gradient: 'bg-gradient-to-tr from-orange-500 to-red-600',
      title: 'Increased Brand Awareness',
      description: 'Boost awareness through impactful inflight branding campaigns that resonate with travellers.'
    },
    {
      icon: 'pi-filter',
      gradient: 'bg-gradient-to-tr from-indigo-400 to-indigo-600',
      title: 'Targeted Advertising',
      description: 'Deliver tailored messages to specific demographics and interests for maximum effectiveness.'
    },
    {
      icon: 'pi-chart-line',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Measurable ROI',
      description: 'Track campaign performance with clear metrics to measure return on investment.'
    },
    {
      icon: 'pi-gift',
      gradient: 'bg-gradient-to-tr from-pink-400 to-yellow-600',
      title: 'Unique Advertising Opportunities',
      description: 'Leverage innovative formats that stand out from traditional advertising methods.'
    },
    {
      icon: 'pi-handshake',
      gradient: 'bg-gradient-to-tr from-sky-400 to-blue-600',
      title: 'Partnership Opportunities',
      description: 'Collaborate with airlines and brands to create mutually beneficial campaigns.'
    }
  ]
};

howPencilPeelHelps: any = {
  title: "How Pencil Peel IMT Can Help You Grow With Your Brand/Product",
  description: "",
  features: [
    {
      id: 1,
      title: 'Increase Brand Awareness',
      description: 'We will increase brand awareness through effective inflight branding campaigns.',
      icon: 'pi-bullseye',
      borderColor: 'purple-500',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    },
    {
      id: 2,
      title: 'Drive Sales',
      description: 'Our team will help you drive sales through targeted advertising.',
      icon: 'pi-chart-line',
      borderColor: 'red-500',
      iconBgColor: 'red-100',
      iconColor: 'red-600'
    },
    {
      id: 3,
      title: 'Enhance Customer Engagement',
      description: 'We will create ads that engage customers and foster loyalty.',
      icon: 'pi-users',
      borderColor: 'teal-500',
      iconBgColor: 'teal-100',
      iconColor: 'teal-600'
    }
  ],
  footer: ""
};




}
